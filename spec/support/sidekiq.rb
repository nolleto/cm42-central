require 'sidekiq/testing'

RSpec.configure do |config|
  config.around(:each, sidekiq: :inline) do |example|
    Sidekiq::Testing.inline! do
      example.run
    end
  end
end
