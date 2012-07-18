# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{httpauth}
  s.version = "0.1"

  s.required_rubygems_version = nil if s.respond_to? :required_rubygems_version=
  s.authors = ["Manfred Stienstra"]
  s.cert_chain = nil
  s.date = %q{2006-09-04}
  s.description = %q{HTTPauth is a library supporting the full HTTP Authentication protocol as specified in RFC 2617; both Digest Authentication and Basic Authentication.}
  s.email = %q{manfred@fngtps.com}
  s.homepage = %q{http://httpauth.rubyforge.org}
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.8.0")
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{Library for the HTTP Authentication protocol (RFC 2617)}

  if s.respond_to? :specification_version then
    s.specification_version = 1

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
