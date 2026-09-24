# frozen_string_literal: true

require "net/http"
require "uri"
require "json"

module SealedRose
  VERSION = "1.0.0"

  class Client
    attr_accessor :base_url, :api_key

    def initialize(base_url: "https://sealedrose.com", api_key: nil)
      @base_url = base_url.chomp("/")
      @api_key = api_key || ENV["SEALEDROSE_API_KEY"]
    end

    def verify_video(url: nil, file_path: nil)
      dispatch("/api/verify-video", "video", url, file_path)
    end

    def verify_image(url: nil, file_path: nil)
      dispatch("/api/verify-image", "image", url, file_path)
    end

    private

    def dispatch(endpoint, field_name, url, file_path)
      uri = URI.parse("#{@base_url}#{endpoint}")
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = (uri.scheme == "https")

      if url
        request = Net::HTTP::Post.new(uri.request_uri, "Content-Type" => "application/json")
        request["Authorization"] = "Bearer #{@api_key}" if @api_key
        request.body = JSON.dump({ url: url })
      elsif file_path
        boundary = "SealedRoseBoundary#{Time.now.to_i}"
        request = Net::HTTP::Post.new(uri.request_uri, "Content-Type" => "multipart/form-data; boundary=#{boundary}")
        request["Authorization"] = "Bearer #{@api_key}" if @api_key

        file_content = File.binread(file_path)
        file_name = File.basename(file_path)

        post_body = []
        post_body << "--#{boundary}\r\n"
        post_body << "Content-Disposition: form-data; name=\"#{field_name}\"; filename=\"#{file_name}\"\r\n"
        post_body << "Content-Type: application/octet-stream\r\n\r\n"
        post_body << file_content
        post_body << "\r\n--#{boundary}--\r\n"

        request.body = post_body.join
      else
        raise ArgumentError, "Either url or file_path must be provided."
      end

      response = http.request(request)
      unless response.is_a?(Net::HTTPSuccess)
        raise "Sealed Rose API Error: #{response.code} #{response.message} - #{response.body}"
      end

      JSON.parse(response.body)
    end
  end
end
