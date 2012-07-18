# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{oauth2}
  s.version = "0.6.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Michael Bleigh", "Erik Michaels-Ober"]
  s.date = %q{2012-04-18}
  s.description = %q{A Ruby wrapper for the OAuth 2.0 protocol built with a similar style to the original OAuth gem.}
  s.email = ["michael@intridea.com", "sferik@gmail.com"]
  s.files = ["spec/helper.rb", "spec/oauth2/access_token_spec.rb", "spec/oauth2/client_spec.rb", "spec/oauth2/response_spec.rb", "spec/oauth2/strategy/auth_code_spec.rb", "spec/oauth2/strategy/base_spec.rb", "spec/oauth2/strategy/client_credentials_spec.rb", "spec/oauth2/strategy/password_spec.rb"]
  s.homepage = %q{http://github.com/intridea/oauth2}
  s.require_paths = ["lib"]
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{A Ruby wrapper for the OAuth 2.0 protocol.}
  s.test_files = ["spec/helper.rb", "spec/oauth2/access_token_spec.rb", "spec/oauth2/client_spec.rb", "spec/oauth2/response_spec.rb", "spec/oauth2/strategy/auth_code_spec.rb", "spec/oauth2/strategy/base_spec.rb", "spec/oauth2/strategy/client_credentials_spec.rb", "spec/oauth2/strategy/password_spec.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<faraday>, ["~> 0.7"])
      s.add_runtime_dependency(%q<multi_json>, ["~> 1.3"])
      s.add_runtime_dependency(%q<httpauth>, ["~> 0.1"])
      s.add_development_dependency(%q<multi_xml>, [">= 0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<rdoc>, [">= 0"])
      s.add_development_dependency(%q<rspec>, [">= 0"])
      s.add_development_dependency(%q<simplecov>, [">= 0"])
    else
      s.add_dependency(%q<faraday>, ["~> 0.7"])
      s.add_dependency(%q<multi_json>, ["~> 1.3"])
      s.add_dependency(%q<httpauth>, ["~> 0.1"])
      s.add_dependency(%q<multi_xml>, [">= 0"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<rdoc>, [">= 0"])
      s.add_dependency(%q<rspec>, [">= 0"])
      s.add_dependency(%q<simplecov>, [">= 0"])
    end
  else
    s.add_dependency(%q<faraday>, ["~> 0.7"])
    s.add_dependency(%q<multi_json>, ["~> 1.3"])
    s.add_dependency(%q<httpauth>, ["~> 0.1"])
    s.add_dependency(%q<multi_xml>, [">= 0"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<rdoc>, [">= 0"])
    s.add_dependency(%q<rspec>, [">= 0"])
    s.add_dependency(%q<simplecov>, [">= 0"])
  end
end
