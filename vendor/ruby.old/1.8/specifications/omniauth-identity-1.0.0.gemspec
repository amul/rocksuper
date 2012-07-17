# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{omniauth-identity}
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Michael Bleigh"]
  s.date = %q{2011-11-02 00:00:00.000000000Z}
  s.description = %q{Internal authentication handlers for OmniAuth.}
  s.email = ["michael@intridea.com"]
  s.files = ["spec/omniauth/identity/model_spec.rb", "spec/omniauth/identity/models/active_record_spec.rb", "spec/omniauth/identity/models/mongo_mapper_spec.rb", "spec/omniauth/identity/models/mongoid_spec.rb", "spec/omniauth/identity/secure_password_spec.rb", "spec/omniauth/strategies/identity_spec.rb", "spec/spec_helper.rb"]
  s.homepage = %q{http://github.com/intridea/omniauth-identity}
  s.require_paths = ["lib"]
  s.rubygems_version = %q{1.6.2}
  s.summary = %q{Internal authentication handlers for OmniAuth.}
  s.test_files = ["spec/omniauth/identity/model_spec.rb", "spec/omniauth/identity/models/active_record_spec.rb", "spec/omniauth/identity/models/mongo_mapper_spec.rb", "spec/omniauth/identity/models/mongoid_spec.rb", "spec/omniauth/identity/secure_password_spec.rb", "spec/omniauth/strategies/identity_spec.rb", "spec/spec_helper.rb"]

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<omniauth>, ["~> 1.0"])
      s.add_development_dependency(%q<maruku>, ["~> 0.6"])
      s.add_development_dependency(%q<simplecov>, ["~> 0.4"])
      s.add_development_dependency(%q<rack-test>, ["~> 0.5"])
      s.add_development_dependency(%q<rake>, ["~> 0.8"])
      s.add_development_dependency(%q<rspec>, ["~> 2.7"])
      s.add_development_dependency(%q<bcrypt-ruby>, ["~> 3.0"])
      s.add_development_dependency(%q<activerecord>, ["~> 3.1"])
      s.add_development_dependency(%q<mongoid>, [">= 0"])
      s.add_development_dependency(%q<mongo_mapper>, [">= 0"])
      s.add_development_dependency(%q<bson_ext>, [">= 0"])
    else
      s.add_dependency(%q<omniauth>, ["~> 1.0"])
      s.add_dependency(%q<maruku>, ["~> 0.6"])
      s.add_dependency(%q<simplecov>, ["~> 0.4"])
      s.add_dependency(%q<rack-test>, ["~> 0.5"])
      s.add_dependency(%q<rake>, ["~> 0.8"])
      s.add_dependency(%q<rspec>, ["~> 2.7"])
      s.add_dependency(%q<bcrypt-ruby>, ["~> 3.0"])
      s.add_dependency(%q<activerecord>, ["~> 3.1"])
      s.add_dependency(%q<mongoid>, [">= 0"])
      s.add_dependency(%q<mongo_mapper>, [">= 0"])
      s.add_dependency(%q<bson_ext>, [">= 0"])
    end
  else
    s.add_dependency(%q<omniauth>, ["~> 1.0"])
    s.add_dependency(%q<maruku>, ["~> 0.6"])
    s.add_dependency(%q<simplecov>, ["~> 0.4"])
    s.add_dependency(%q<rack-test>, ["~> 0.5"])
    s.add_dependency(%q<rake>, ["~> 0.8"])
    s.add_dependency(%q<rspec>, ["~> 2.7"])
    s.add_dependency(%q<bcrypt-ruby>, ["~> 3.0"])
    s.add_dependency(%q<activerecord>, ["~> 3.1"])
    s.add_dependency(%q<mongoid>, [">= 0"])
    s.add_dependency(%q<mongo_mapper>, [">= 0"])
    s.add_dependency(%q<bson_ext>, [">= 0"])
  end
end
