# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{jruby-pageant}
  s.version = "1.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Art\305\253ras \305\240lajus"]
  s.date = %q{2012-02-16}
  s.description = %q{This is a convenience gem packaging required JNA/JSCH jars.}
  s.email = ["arturas.slajus@gmail.com"]
  s.homepage = %q{http://github.com/arturaz/jruby-pageant}
  s.require_paths = ["lib-fake"]
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{jruby-pageant allows Pageant access on JRuby + Windows}

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
