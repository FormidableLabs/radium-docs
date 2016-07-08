Radium Documentation
======================

Home of the docs. Land of the knowledge.


## Deploying
The site’s documentation section is pulled in directly from the `victory` repo’s README, which means it’s only as current as your local `node_modules/victory`. To refresh the docs, run `npm update victory`. (If you forget this step in dev, it’s run automatically as part of `builder run build-static`, so you can’t accidentally publish outdated docs.)

Test the static build locally:
```sh
builder run build-static # Builds site to static HTML/JS in `/build`

# Test the static build in your browser
builder run server-static
builder run open-static
```

When it’s time to publish, we use travis to deploy the site automatically.

### Travis

First, convert the SSH key to `.pem` format:

```
ssh-keygen -f id_rsa -e -m pem > deploy_static.pem
```

Then, [encrypt the key with the travis gem](https://docs.travis-ci.com/user/encrypting-files/), which will generate encrypted environment variables on travis. It will modify the `.travis.yml` file to add the decryption step, and any comments/formatting will be lost. (Note: encrypted environment variables are not available for pull requests from forks.)

```
gem install travis
travis encrypt-file ~/.ssh/deploy_static.pem --add
```

Make sure the travis config does not preserve the `~/.ssh/` filepath in `.travis.yml` configuration file.
