Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, "vQ23uXMlIpeLFm5Ax4ZhzQ", "YKRAmMJ4bGvPepg9S12p3s0hcnzO8w6Y5uIJ8Q6dGRQ"
  provider :facebook, "442108809146364", "80d164d96b72342048484379b8cbcc1f"
  provider :identity
end
