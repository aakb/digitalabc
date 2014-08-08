#Digital ABC

##Information
This is the Digital ABC project. It is a Symfony2 project that utilises angularjs.

To allow the AngularJS integration within a twig template the interpolation symbols have changed for angular from {{ }} to <[ ]>.

We use uglifyjs to compile the javascripts into one file. See Helpful commands for the command to compile the scripts.

###Helpful commands
To compile the javascripts
<pre>
app/console assetic:dump
</pre>
To watch for changes in the javascripts
<pre>
app/console assetic:dump --watch
</pre>
To clear cache
<pre>
app/console cache:clear
</pre>
To build asssets
<pre>
app/console assets:install
</pre>
Remove cache on live
<pre>
rm -R app/cache/*
</pre>

##Installation instructions
###Get composer
With brew (global install)
<pre>
$ brew install composer
</pre>

Without brew. Go to project directory:

<pre>
$ curl -sS http://getcomposer.org/installer | php
</pre>

This will download composer.phar to the project directory.

###Install dependencies for project
With brew:
<pre>
$ composer install
</pre>

Without brew:
<pre>
$ php composer.phar install
</pre>

If there are problems with this, try with apc.enable_cli = Off in php.ini or from the cli:
<pre>
php -d apc.enable_cli=Off composer.phar install
</pre>

###Setup project
<pre>
$ cp app/config/parameters.yml.dist app/config/parameters.yml
</pre>

Fill in relevant settings.

###Setup DB and after changing an entity
<pre>
$ php app/console doctrine:schema:update
</pre>
(--force)

###Fix permissions
Make sure the webserver has access to
<pre>
app/cache/
app/logs/
</pre>

Furthermore, make sure the webserver has access to
<pre>
web/images/
</pre>
which is the folder where the uploaded images will reside.

###Set up webserver
<pre>
http://symfony.com/doc/current/cookbook/configuration/web_server_configuration.html
</pre>

###Check system configuration
Check that local system is properly configured for Symfony.

<pre>
$ php app/check.php
</pre>

> Look for ERROR or WARNING and correct these.

Check config link in browser to run check requirements for the web server.

<pre>
http://[path_to_project/app/web]/config.php
</pre>

Fix problems.


###Ready to go!
