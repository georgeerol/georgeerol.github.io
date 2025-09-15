source "https://rubygems.org"

# Local Jekyll 4 setup for development
gem "jekyll", "~> 4.3"

# Essential plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Use jekyll-sass-converter v2 with sassc to avoid protobuf
gem "jekyll-sass-converter", "~> 2.2"
gem "sassc", "~> 2.4"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :mswin, :x64_mingw, :mswin64] 