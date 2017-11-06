<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="data1.css">
    <?php include('ga_script.php'); ?>
    <script type="text/javascript" src="realtimeScript.js"></script>
  </head>
  <body>
  <?php 
      require_once "libs/Google/autoload.php";
      $client_email = 'ga-dashbaord@core-era-139205.iam.gserviceaccount.com';

      $private_key = file_get_contents('example.p12'); // replace with p12 key
      $scopes = array('https://www.googleapis.com/auth/analytics.readonly');
      $credentials = new Google_Auth_AssertionCredentials(
          $client_email,
          $scopes,
          $private_key
      );

      $config = new Google_Config();
      $config->setClassConfig('Google_Cache_File', array('directory' => '/tmp/cache'));
      // Here I set a relative folder to avoid pb on permissions to a folder like /tmp that is not permitted on my mutualised host

      $client = new Google_Client($config);
      $client->setAssertionCredentials($credentials);
      if ($client->getAuth()->isAccessTokenExpired()) {
        $client->getAuth()->refreshTokenWithAssertion();
      }

      $access_token = $client->getAccessToken();

      echo '<script>';
      echo 'var GA=' . $access_token;
      echo '</script>';

  ?>
      <!-- <div class="rubiks"></div> -->
      <center><header>GMA News Online</header></center>

      <div id="embed-api-auth-container"></div>

      <div class="dontShow">     
        <div id="view-selector-container"></div>
        <input type="hidden" id="view-name" />
      </div>

      <div class="content">

        <div class="tileContent">

          <div class="tile-small">
            <div id="active-users-container"></div>
          </div>

          <div class="tile-small">
            <div id="active-users-containerNF"></div>
            <div id="active-users-container3"></div>
            <div id="active-users-container4"></div>
          </div>

          <div class="tile4" id="TopPages"></div>

          <div class="tile2" id="device" style="width: 130px;"></div>
          
          <div class="tile" id="browser"></div>

          <div class="tile" id="city"></div>

          <div class="tile" id="country"></div>

          <div class="tile5" id="geo"></div>

          
         <div id="val2" hidden></div>
          <div id="val3" hidden></div>

        </div>
      </div>    
  </body>
</html>