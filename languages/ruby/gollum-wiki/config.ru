#!/usr/bin/env ruby

require 'rubygems'
require 'gollum/auth'
require 'gollum/app'

set :run, false
set :environment, :production
set :port, ENV['PORT'] || 9494

users = YAML.load %q{
---
- username: yuta
  password: test
  name: Yuta Mizui
  email: me@mziyut.com
}
options = {}
use Gollum::Auth, users, options

gollum_path = File.expand_path(File.dirname(__FILE__)) + '/wiki'
wiki_options = {}

Precious::App.set(:gollum_path, gollum_path)
Precious::App.set(:default_markup, :markdown)
Precious::App.set(:wiki_options, wiki_options)

run Precious::App
