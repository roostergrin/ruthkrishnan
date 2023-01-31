# Ruth Krishnan
This is a traditional Wordpress site hosted on its own dedicated server, RoosterGrinTrestles (52.12.152.11).

&nbsp;

# Setting Up A Local Environment
To get started, it is best to set up a local development environment. Since this is a traditional Wordpress site, we will get a local development environment set up by using MAMP. MAMP is a local server environment that will allow us to run a Wordpress site locally. All we need to do is download MAMP, all Wordpress site files, and the ruthkrishnan theme files. 

__Step 1:__ Download and install MAMP <a href='https://www.mamp.info/en/downloads/' target='_blank'>here</a>.

__Step 2:__ Go to RoosterGrinTrestles (<a href='https://52.12.152.11:8443/' target='_blank'>52.12.152.11</a>) server on plesk and navigate to the <strong>ruthkrishnan.com</strong> domain, then go to the File Manager.

__Step 3:__ In the File Manager, download the following the file __rk_local.zip__ This is a zip copy of all files on the server. If this file does not exists, select all files on the live server and click on "add to archive" to make a new zip copy of all the files. Note rk_local.zip is several GB and will take a few minutes to download.

__Step 4:__ Now we can back out of the File Manager on Plesk and go to the databases. Here we will "Export Dump" for the __admin_ruthkrishnan__ database. Download the dump (we will use this later)

__Step 5:__ Head over to the rk_local.zip file and unzip it onto your desktop and go into the unzipped "rk_local" directory. 

__Step 6:__ Navigate to wp-content and remove the "themes" directory. Then clone down this repository into the "wp-content" directory and rename the repository directory to "themes".

Here is an example of how your files should look:

```
-- rk_local/

|-- ...wp files...

|-- wp-content/

|  |-- ...wp files...

|  |-- themes/

|  |  |-- README.md

|  |  |-- ruthkrishnan/
```

Next step is to go into the theme directory (rk_local/wp-content/themes/ruthkrishnan) and run `npm install` to install all the dependencies.

__Step 7:__ Open MAMP (make sure its not the PRO version), and go to Preferences > Web Server, and under "Document Root:" click select, and choose the unzipped folder "rk_local". Then click "OK", then click "Start Servers." Starting the MAMP server will automatically open a webpage http://localhost:8888/MAMP/?language=English.

__Step 8:__ Navigate to the "Tools" dropdown in the navigation and click on "PHPMYADMIN"

__Step 9:__ In PHPMYADMIN, click on the Databases tab and create a new database named 'admin_ruthkrishnan' and select the "utf8_general_ci" character set (this should be the default). Then click "Create".

__Step 10:__ Inside the "admin_ruthkrishnan" database, go to the "Import" tab. Click "Choose File" and select the dump file that we downloaded in Step 4. Then at the bottom of the screen, click "Go"

__Step 11:__ Now click on "admin_ruthkrishnan" in the sidebar on the left, and open the "wp_options" table. Here we will change the "option_value" for the "siteurl" and "home" to "http://localhost:8888"

__Step 12:__ Navigate over to the Privileges Tab at the top of PHPMYADMIN. Check to see if there is a user with the name "admin_ruthkrishnan". If there isn't, create a user account and have all the credentials match the DB user name, password, and host (host should be "localhost") in your wp_config file located in the "rk_local" directory. 

__Step 13:__ Head back to the downloaded unzipped "rk_local" directory. Since this is only for a local environment, let's remove some plugins that we will not need (the following plugins are used to help with page load speeds and adds recaptcha. We only need these on the live site). Open the "rk_local" directory and navigate to "wp-content/plugins" and remove the following plugins:

- ewww-image-optimizer
- invisible-recaptcha
- simple-google-recaptcha
- wp-rocket


__Finishing up:__ Now you should be able to view the site locally at http://localhost:8888 and you may log into the admin site at http://localhost:8888/wp-admin (login credentials are under 'Ruthkrishnan ( WordPress)' in lastpass). If /wp-admin tells you to update the database, <a href="https://www.weblydigital.com/wordpress-database-update-required/" target="_blank">try this</a>.

&nbsp;


# Keep in mind

1. The database on your local development environment is separate from the live site. Any changes done in WP backend will need to be copied over to the live site when ready (i.e. Adding/Updating Advanced Custom Fields, Updating text on a page in WP Admin, uploading new images etc.)

2. Images on the site are uploaded using the default WP media library. The live site automatically optimizes every image and uploads them to an AWS S3 Bucket. (we have disabled/removed the plugins that do this on the local dev environment)

3. The live site has an auto-caching plugin, "WP Rocket", that may show you cached versions of the site. To view new updates to the live site, go to the WP backend of the live site > Settings > WP Rocket. Here you will see a button on the right hand side labeled "Clear Cache"

&nbsp;

# Making Updates To Sass and JS files

All javascript files and sass files are in `themes/ruthkrishnan/src`. All sass files are in the sass directory and all the js files are located in the scripts directory.

__DO NOT__ make any changes to the files located in the /js or /styles directories.

All sass and js files are compiled using Laravel Mix. Laravel Mix allows us to use sass in development and output css files for Wordpress to use. It also allows us to compile js files together to allow us to organize and reuse js scripts easier.

If you haven't done so already, go into the theme directory (rk_local/wp-content/themes/ruthkrishnan) and run `npm install`.

Once you make changes to the sass/js files, you will need to compile it by running the command in your command line/terminal ```npx mix```. If you are making continuous changes, you can have laravel mix watch for changes and automatically compile sass/js files by running the command ```npx mix watch```.

Laravel Mix outputs all the compiled sass to the /styles directory and all the js files to the /js directory. The location for the output files are configured in the "webpack.mix.js" file. 

&nbsp;

# Pushing changes

You can push changes to the repo as normal. The only thing to keep in mind is you may have to compile sass and js changes with `npx mix` as described above.

After pushing up new code for the theme to the GitHub repo, you will need to go into the live site WP backend and update the files using WP Pusher (in the WP backend > WP Pusher > Themes > Click "Update Theme").

You may need to clear the WP Rocket cache to see the changes.

&nbsp;

# Walkthrough Video Recordings

View the video recordings of the site walkthrough <a href='https://drive.google.com/drive/u/0/folders/18lVADrXvLo0Hez04yavBkco2F6NdFrPi' target='_blank'>here</a>.

# Updating your local

## git

`git pull` ought to do it

## db

Turn on the MAMP server and go to phpmyadmin.

Find the databases tab.

Check the box next to the rk db, then click 'drop / ok'.

Now go back to 'setting up a local' and follow all the db steps.

## Troubleshooting

If you get this error:

1 errors were found during analysis.

Missing expression. (near "ON" at position 25)

Create a file in /Application/MAMP/conf/
Name it my.cnf
Copy and paste this into the my.cnf file

# The MySQL server
[mysqld]
max_allowed_packet = 64M

Save the file and restart the server
