var app_config = {
    api_host: "http://127.0.0.1:5000",
    api_prefix: "api/v1",
};

app_config.api_endpoint = app_config.api_host +'/'+ app_config.api_prefix;

export default app_config;