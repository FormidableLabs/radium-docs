Radium Documentation
======================

[![Build Status](https://travis-ci.org/FormidableLabs/radium-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/radium-docs)

## **[http://formidable.com/open-source/radium](http://formidable.com/open-source/radium)**

## Deploying

Any updates to the `master` branch are automatically deployed with travis.

Test the static build locally:
```sh
builder run build-static # Builds site to static HTML/JS in `/build`

# Test the static build in your browser
builder concurrent server-static open-static
```

### Travis

To hookup travis, first, convert the SSH key to `.pem` format:

```sh 
openssl rsa -in id_rsa -out deploy_static.pem
```

Then, [encrypt the key with the travis gem](https://docs.travis-ci.com/user/encrypting-files/), which will generate encrypted environment variables on travis. It will modify the `.travis.yml` file to add the decryption step, and any comments/formatting will be lost. (Note: encrypted environment variables are not available for pull requests from forks.)

```
gem install travis
travis encrypt-file ~/.ssh/deploy_static.pem --add
```

Make sure the `.travis.yml` configuration file does not preserve any of the filepath, e.g. `~/.ssh/` from the example above.
