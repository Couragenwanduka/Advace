<?php
ob_start();
    include("auth_session.php");
    ?>
    
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="css/bootstrap.min.css" rel="stylesheet"></link>
  <title>Advanta Investment</title>
  <link href="css/home.css" rel="stylesheet"></link>
  <!-- <link href="css/tab.css" rel="stylesheet"></link>
   -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
  <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>

  <style>
    .empty_transaction {
      margin: 0 auto;
    }
    .transaction-head{
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: left!important;
    
    }
    .actual_transaction{
    display: flex;
    gap: 24px;
    flex-direction: column;
    /* display: none; */
    }
    .transaction-numbers{
      display: flex;
      gap: 19px;
    }
    .transaction-deposit{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 40px;
      
    /* opacity: 0.16 */
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);;
      padding-bottom: 9px
    }
    .transaction-deets{
      display: flex;
      flex-direction: row;
      width: 300px;
    }
    .transactions-options{
      flex-direction: row;
      height: 96px;
      align-items: center;
    }
    .transaction-history img{
      align-content: center;
      display: flex;
    }
    .transaction-history{
      display: flex;
      flex-direction: column;
      padding: 24px;
      padding-bottom: 50px;
      gap: 32px;
      width: 824px;

      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: white;
    }
    .transaction-currency{
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      margin-left: 20px;
    }
    .transaction-date{
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      letter-spacing: -0.24px;
    }
    .transaction-status{
      width: 53.44px;
      height: 23px;
      text-align: center;
      border-radius: 61.2328px;
    }
    .transaction-done{
      font-weight: 600;
      font-size: 10px;
      line-height: 22px;
      color: #219653;
      background: rgba(33, 150, 83, 0.2);
    }
    .transaction-processing{
      font-weight: 600;
      font-size: 10px;
      line-height: 22px;
      color: #FFBF00;
      background: rgb(150, 129, 33, 0.2);
    }
    .transaction-cancelled{
      font-weight: 600;
      font-size: 10px;
      line-height: 22px;
      color: #E63946;
      background: rgba(230, 57, 70, 0.2);
    }
    .below-amiss{
      font-weight: 400;
      font-size: 13.3333px;
      line-height: 17px;
    }
    .amiss{
      font-weight: 700;
      font-size: 14.2222px;
      line-height: 21px;
      color: white;
    }
    .transactions-options{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 31px 45px;
      gap: 16px;
      width: 415px;
      height: 166px;
      left: 409px;
      top: 12px;

      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
    }
    .balance-card{
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 8.85649px rgba(45, 58, 58, 0.02);
      border-radius: 11.9642px;
      width: 376.4px;
      height: 188.2px;
      padding: 0;
      margin: 0;
    }
    .balance-card .balance-text{
      padding: 22.14px;
      padding-bottom: 0;
      color: white;
    }
    .balance-number{
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 0;
    }
    .mx-156{
      margin: 0 156px!important;
    }
    *{
      font-family: 'Sk Modernist';
    }
    .header{
      display: flex;
      justify-content: space-around;
    }
    .get-started{
      display: flex;
      gap:34px
    }
    .def-btn{
      display: flex;
      /* width: 158px; */
      text-align: center;
      padding: 11px 39px;
      height: 48px;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
    .bg-red{
      background-color: #E63946;
    }
    .general-color{
      color: #E63946;
    }
    .below-hero{
      position: absolute;
      height: 113px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, rgba(7, 7, 7, 0) 0%, #070707 100%);
    }
    .sub-header{
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      /* identical to box height, or 178% */

      letter-spacing: 0.2em;

      /* Primary Color */

      color: #E63946;
    }
    .normal-header{
      font-weight: 600;
      font-size: 42px;
      line-height: 124%;
      color: #FFFFFF;
    }
    .heading500{
      font-weight: 500;
      font-size: 32px;
      line-height: 124%;
    }
    .minifeature-row{
      display: flex;
      flex-direction: row;
      gap: 34px;
    }
    .minifeature-item{
      width: 186px;
    }
    .minifeature-item>img{
      margin-right: 27px;
    }
    .minifeature-item>span{
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      /* identical to box height, or 180% */


      /* White */

      color: #FFFFFF;
    }
    .black-card-head{
      font-weight: 600;
      font-size: 22px;
      line-height: 26px;
      color: #FFFFFF;
    }
    .black-card{
      background: linear-gradient(152.98deg, rgba(255, 255, 255, 0.2) 14.8%, rgba(255, 255, 255, 0.01) 87.76%);
      box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(25px);
      border-radius: 40px;
      border: 1px solid rgba(230, 57, 70, 0.3);
      width: 388px;
      /* height: 446px; */
      padding: 32px;
    }
    .investments-needs{
      display: flex;
      flex-direction: row;
      /* margin: 0 100px; */
      margin-top: 75px;
      
    }
    /* .investments-needs>div:nth-child(1){
      margin-right: 150px;
    } */
    .how-it-works {
      display: flex;
      gap: 40px;
      flex-direction: row;
      margin-top: 64px;
    }
    .testimonial-buttons>img{
      margin-right: 32px;
    }
    .testimonial-buttons{
      margin-top: 40px;
    }
    .testimonial-card{
      background-color: white;
      padding: 34px 32px 59px 56px;
      width: 648px;
      box-shadow: 0px 8px 16px -6px rgba(24, 39, 75, 0.08);
      border-radius: 12px;
      display: flex;
      flex-direction: row;
      gap: 64px;
    }
    .testimonial-contact-info{
      width: 120px;
      padding-top: 20px;
    }
    .testimonial-contact-info>img{
      width: 120px;
      height: 120px;
      border-radius: 100px;
      margin-bottom: 10px;
    }
    .testimonial-contact-info>p{
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #1D3557;
    }
    .testimonial-contact-info>span{
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      color: rgba(29, 53, 87, 0.4);
      text-align: center;
      display: flex;
      justify-content: center;
    }
    .testimonial-message{
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      display: flex;
      letter-spacing: 0.004em;
      text-transform: capitalize;
      color: rgba(29, 53, 87, 0.4);
      padding-top: 60px;
      position: relative;
    }
    .testimonial-div{
      /* margin: 0 100px; */
      display: flex;
      flex-direction: row;
      gap: 150px;
    }
    .page-location{
      display: flex;
      gap: 11px;
      flex-direction: row;
      align-items: center;
      margin-top: 46px;
    }
    .text-24{
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
    .whiteshade{
      color: #8B8989;
    }
    .mb-90{
      margin-bottom: 90px;
    }
    .deposit {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 512px;
    height: 684px;
    z-index: 10000;
    display: none;
    
    /* padding: ; */
    padding-top: 32px;
    padding-bottom: 56px;
    gap: 25px;
    /* display: flex; */
    align-items: center;
    flex-direction: column;
    background-color: white;
    border: 1px solid white;
    border-radius: 12px;
    text-align: center;
            /*to hide popup initially*/
    }

    .withdraw {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 512px;
      /* height: 684px; */
      z-index: 10000;
      display: none;
      
      /* padding: ; */
      padding-top: 32px;
      padding-bottom: 56px;
      gap: 25px;
      /* display: flex; */
      align-items: center;
      flex-direction: column;
      background-color: white;
      border: 1px solid white;
      border-radius: 12px;
      text-align: center;
            /*to hide popup initially*/
    }
          
    .close-btn {
      position: absolute;
      right: 20px;
      top: 5px;
      background-color: white;
      color: black;
      border-radius: 50%;
      padding: 4px;
      font-size: 35px;
    }
    
    .deposit form{
      padding: 62px 94px;
      padding-top: 10px;
    }
    .withdraw form{
      padding: 10px 94px 32px ;
      /* padding-top: 10px; */
    }
    .withdraw1{
      display: none;
      text-align: center;
      width: 355px;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 30px;
      align-items: center;
    }
    .withdraw2{
      display: none;
    }
    .form3{
      display: none;
    }
    .form2{
      display: none;
    }
    .blur-bg{
      display: none;
      position: absolute;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
    }
    .hidden {
        /* visibility: hidden; */
        /* opacity: 0; */
        width: 0;
        /* transform: translateX(283px); */
        /* transition: width .3s ease;*/
    }
    #withdraw_screenshot::before {
      content: "Pick file";
      position: absolute;
      z-index: 2;
      display: block;
      background-color: #eee;
      width: 80px;
    }.withdraw_success{
      display: none;
      text-align: center;
      width: 355px;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 20px;
      align-items: center;
    }
    @media only screen and (max-width: 600px) {
      .row.gap-3{
        flex-direction: column-reverse;
      }
    }
  </style>
  <link href="css/mobile.css" rel="stylesheet"></link>
</head>
<body class="bg-black">
<?php
    error_reporting(E_ALL);
    // include("auth_session.php");
    require('db.php');
    $_SESSION['message'] ="";
    // When form submitted, insert values into the database.
    if (isset($_REQUEST['email'])) {
        // removes backslashes
        // $username = stripslashes($_REQUEST['username']);
        // //escapes special characters in a string
        // $username = mysqli_real_escape_string($con, $username);
        
        $email    = stripslashes($_REQUEST['email']);
        $email    = mysqli_real_escape_string($con, $email);
        $amount = stripslashes($_REQUEST['amount']);
        $amount = mysqli_real_escape_string($con, $amount);
        var_dump($_REQUEST['depositmethod']);
        $coin = stripslashes($_REQUEST['depositmethod']);
        $coin = mysqli_real_escape_string($con, $coin);

        $create_datetime = date("Y-m-d H:i:s");

        $query    = "INSERT into `transactions` (amount, email, create_datetime, coin, mode)
                     VALUES ('$amount', '$email', '$create_datetime', '$coin', 0)";
        $result   = mysqli_query($con, $query);
        if ($result) {
          header("Location:transactions.php?status=dsuccess");
          // $_SESSION['message'] = "<alert>Deposit Added Successfully</alert>";
          //   echo "<alert>Deposit Added Successfully</alert>";
        } else {
          header("Location:transactions.php?status=derror");
          // $_SESSION['message'] = "<alert>Please Try again.</alert>";
          //   echo "<alert>Please Try again.</alert>";
        }
    } elseif (isset($_REQUEST['withdraw_email'])) {
      echo '<script>console.log("'.$_FILES["withdraw_screenshot"]["name"].$_FILES["withdraw_screenshot"]["tmpname"].' Got to withdraw")</script>';
      $feedepositmethod    = stripslashes($_REQUEST['feedepositmethod']);
      $feedepositmethod    = mysqli_real_escape_string($con, $feedepositmethod);

      $feeamount    = stripslashes($_REQUEST['amount']);
      $feeamount    = mysqli_real_escape_string($con, $feeamount);

      $filename = $_FILES["withdraw_screenshot"]["name"];
      $tempname = $_FILES["withdraw_screenshot"]["tmp_name"];
      $folder = "./images/deposit_screenshots/" . $filename;

      $email    = stripslashes($_REQUEST['withdraw_email']);
      $email    = mysqli_real_escape_string($con, $email);

      $amount = stripslashes($_REQUEST['withdraw_amount']);
      $amount = mysqli_real_escape_string($con, $amount);

      $wallet_address = stripslashes($_REQUEST['wallet_address']);
      $wallet_address = mysqli_real_escape_string($con, $wallet_address);

      $coin = stripslashes($_REQUEST['withdraw_method']);
      $coin = mysqli_real_escape_string($con, $coin);

      $create_datetime = date("Y-m-d H:i:s");

      $query    = "INSERT into `transactions` (amount, email, create_datetime, coin, mode, user_address, screenshot_path, fee_coin, fee_amount)
                   VALUES ('$amount', '$email', '$create_datetime', '$coin', 1, '$wallet_address', '$folder', '$feedepositmethod', '$feeamount')";
      echo '<script>console.log("'.$query.'")</script>';
      $result   = mysqli_query($con, $query);
      if ($result) {
        // $_SESSION['message'] = "<alert>Withdrawal Request Added Successfully</alert>";
        if (move_uploaded_file($tempname, $folder)) {
          header("Location: transactions.php?status=wsuccess");
            // echo "<h3>  Image uploaded successfully!</h3>";
        } else {
          header("Location: transactions.php?status=werror");
            // echo "<h3>  Failed to upload image!</h3>";
        }
      } else {
        header("Location: transactions.php?status=try");
        // $_SESSION['message'] = "<alert>Please Try again.</alert>";
      }
  } else { 
      
?>
  <div class="blur-bg"></div>
  <div class="overlay-menu hidden"></div>
  <header class="header sticky" id="header">
    <a href="index.html">
      <div class="log">
        <img src="./images/logo.svg">
      </div>
    </a>

    <div class="header-links">
      <div class="header-links-item">
        <img class="header-not-active" src="./images/grid.svg">
        <a href="dashboard.php" class="app-header header-links-text header-not-active">Dashboard</a>
      </div>
      <div class="header-links-item">
        <img class="" src="./images/transactions_active.svg">
        <a href="transactions.php" class="app-header header-links-text header-active">Transactions</a>
      </div>
      <div class="header-links-item">
        <img class="" src="./images/users.svg">
        <a href="real_estate.php" class="app-header header-links-text header-not-active">Real Estate</a>
      </div>
      <div class="header-links-item">
        <img class="" src="./images/pricing.svg">
        <a href="app_pricing.html" class="app-header header-links-text header-not-active">Pricing</a>
      </div>
      <div class="header-links-item">
        <img class="" src="./images/headphones.svg">
        <a href="support.php" class="app-header header-links-text header-not-active">Support</a>
      </div>
      <!-- <a href="" class="header-links-item">About</a>-->
      <a href="javascript:void(0);" class="butt mob-menu-icon" onclick="myFunction()">
        <img src="./images/hamburger_menu.svg">
      </a>
    </div>

    <div class="get-started">
      <div class="header-links-item">
        <img class="" src="./images/users.svg">
        <a href="profile.php" class="app-header header-links-text header-not-active">Profile</a>
      </div>
      <div class="header-links-item">
        <img class="" src="./images/log-out.svg">
        <a href="logout.php" class="app-header header-links-text header-not-active">Logout</a>
      </div>
    </div>

    

  </header><nav class="mobile-menu shadow-sm hidden " id="mobile-menu">
    <div id="mobile-header-links" >
      <a href="javascript:void(0);" class="butt mob-menu-icon-cancel" onclick="myFunction()">
        <img src="./images/cancel.svg">
      </a>
      <div class="mobile-header-links-item"><a href="dashboard.php" class="header-links-text header-not-active">Dashboard</a></div>
      <div class="mobile-header-links-item"><a href="transactions.php" class="header-links-text header-active">Transactions</a></div>
      <div class="mobile-header-links-item"><a href="real_estate.php" class="header-links-text header-not-active">Real Estate</a></div>
      <div class="mobile-header-links-item"><a href="app_pricing.html" class="header-links-text header-not-active">Pricing</a></div>
      <div class="mobile-header-links-item"><a href="support.php" class="header-links-text header-not-active">Support</a></div>
      <div class="mobile-header-links-item"><a href="profile.php" class="header-links-text header-not-active">Profile</a></div>
      <div class="mobile-header-links-item"><a href="logout.php" class="header-links-text header-not-active">Logout</a></div>
  </div>
  </nav>
<div style="height:62px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; block-size:62px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:40px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>
  
  <div class="mx-156">
    <div class="page-location bg-black">
      <span class="small-text white-soft align-items-center">Home</span> 
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00006 3.00185L10.9983 2.99993M10.9983 2.99993L8.30645 0.307153M10.9983 2.99993L8.30645 5.69272" stroke="#999CA0" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="general-color">Dashboard</span>
    </div>
    <h1 class="big-header">Transactions</h1>
    <section class="bg-black">
      <div class="container">
        <div class="row gap-3" >
          <div class="balance-card">
            <div class="balance-text">
              <p class="small-text">Balance</p>
              <p class="balance-number">$
                <?php
                  $email = $_SESSION['email'];
                  $transaction1_query    = "SELECT balance FROM `users` WHERE email = '$email'";
                  $transaction1_result   = mysqli_query($con, $transaction1_query);
                  $rows1 = mysqli_fetch_all($transaction1_result, MYSQLI_ASSOC);
                  $balance = $rows1[0]['balance'];
                  echo $balance;
                ?>
              </p>
            </div>
            
            <svg width="377" height="95" viewBox="0 0 377 95" style="top: 50%;" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_93_816)">
              <path d="M-0.509766 64.8861C2.00004 56.4626 13.1148 40.1687 24.2108 42.3798C38.0808 45.1438 37.6846 71.2037 55.5174 74.3625C73.3503 77.5213 78.1057 47.118 93.5608 48.6974C109.016 50.2768 109.016 64.8861 126.849 64.8861C144.682 64.8861 151.419 18.5011 173.611 26.0032C195.803 33.5053 198.577 29.5568 211.258 19.6856C223.939 9.81441 231.42 13.7045 236.955 20.7927C243.781 29.5332 253.007 66.5951 272.286 66.5951C326.744 66.5951 336.294 2.41259 351.749 2.4126C358.346 2.4126 360.864 11.889 362.053 14.258" stroke="#E03C32" stroke-width="2.21412" stroke-linecap="round"/>
              <path d="M24.1735 42.7464C13.0944 40.5272 3.10363 56.8803 0.597656 65.3343V66.1795C0.597656 76.0997 0.597656 81.0598 2.52826 84.8488C4.22646 88.1817 6.9362 90.8915 10.2691 92.5897C14.0581 94.5203 19.0182 94.5203 28.9384 94.5203H361.5V14.5226C360.313 12.1449 357.799 2.63416 351.212 2.63416C335.78 2.63415 326.244 67.0495 271.87 67.0495C252.621 67.0495 243.408 29.8532 236.593 21.0809C231.066 13.967 223.597 10.0628 210.935 19.9699C198.273 29.8769 195.503 33.8397 173.345 26.3103C151.187 18.781 144.46 65.3343 126.655 65.3343C108.849 65.3343 108.849 50.672 93.4176 49.0869C77.986 47.5017 73.2379 78.0154 55.4322 74.8451C37.6266 71.6749 38.0223 45.5204 24.1735 42.7464Z" fill="url(#paint0_linear_93_816)"/>
              <circle cx="361.501" cy="14.8117" r="4.42825" fill="white" stroke="#E03C32" stroke-width="2.21412"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear_93_816" x1="-0.509403" y1="48.4105" x2="361.004" y2="93.5051" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E03C32" stop-opacity="0.3"/>
              <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
              </linearGradient>
              <clipPath id="clip0_93_816">
              <rect width="376.401" height="94.1002" fill="white" transform="translate(0.597656 0.4198)"/>
              </clipPath>
              </defs>
            </svg>
          </div>

          <div class="align-self-center transactions-options">
            <a href="#" onclick="toggleDeposit()" class="def-btn bg-red text-white w-100">Deposit</a>
            <a href="#" onclick="toggleWithdraw()" data-rel="popup" class="def-btn bg-green text-white w-100">Withdraw</a>
          </div>
          
        </div>
        <div>
          <br />
        </div>
        <div class="row">
          <div class="transaction-history">
            <p class="transaction-head">Transaction History</p>

            <?php
              $user = $_SESSION['email'];
              $transaction_query    = "SELECT * FROM `transactions` WHERE email = '$user' order by id desc";
              $transaction_result   = mysqli_query($con, $transaction_query);
              $rows = mysqli_fetch_all($transaction_result, MYSQLI_ASSOC);
              if (count($rows)>0) {
                echo '<div class="actual_transaction g-3">';

                foreach ($rows as $row) {
                  $transaction_date = date_create($row["create_datetime"]);
                  echo '<div class="transaction-deposit">
                  <div class="transaction-deets">';
                  if ($row["mode"] == "0"){
                    echo '<img src="./images/deposit.svg"/>';
                  } else{
                    echo '<img src="./images/withdraw.svg"/>'; 
                  }
                  echo '<p class="transaction-currency">';
                  if ($row["coin"] == "1"){
                    echo 'BTC';
                  } elseif ($row["coin"] == "2"){
                    echo 'BCH';
                  } elseif ($row["coin"] == "3"){
                    echo 'ETH';
                  } elseif ($row["coin"] == "4"){
                    echo 'USDT';
                  } else{
                    echo 'XRP';
                  } 
                  echo'
                  <br/>
                      <span class="white-softest transaction-date">'. date_format($transaction_date, 'h:i A d M Y') .'</span>
                    </p>
                  </div>
                  <div class="transaction-numbers">
                    <div class="transaction-amount">
                      $ '. round($row["amount"], 2).'
                    </div>';
                  if ($row["status"] == "1"){
                    echo '<div class="transaction-status transaction-done">
                            Done
                          </div>';
                  } elseif ($row["status"] == "2"){
                    echo '<div class="transaction-status transaction-cancelled">
                            Cancelled
                          </div>';
                  } else{
                    echo '<div class="transaction-status transaction-processing">
                            Processing
                          </div>';
                  } 
                    
                  echo '</div>
                  
                      </div>';
              }
          
              // /* free result set */
              $transaction_result->free();
              } else {
                echo '<div class="empty_transaction"> 
                        <img src= "/images/no_history.svg"/>
                        <p class="text-center amiss">
                          Something is amiss?<br />
                          <span class="white-softest text-center below-amiss">No transaction History yet. Make a transaction.</span>
                        </p>
                      </div>';
              }

            ?>

            

            
          </div>
        </div>

      </div>
    </section>
      
    <div class="deposit">
      
        <div onclick="toggleDeposit()" class="close-btn">
            ×
        </div>
    <img src="./images/logo.svg">

    <form action="" method="post">
    <?php echo $_SESSION['message'];?>
      <div class="mb-3">
        <label for="depositmethod" class="small-text form-label">Deposit Method</label>
        <select id="depositmethod" name="depositmethod" class="form-select" aria-label="Deposit Method" onchange="addresschange()" required>
          <option selected>Select Deposit Method</option>
          <option value="1">BTC/Bitcoin</option>
          <option value="2">BCH/Bitcoin cash</option>
          <option value="3">ETH/Etheruem</option>
          <option value="4">USDT</option>
          <option value="5">SOL/Solana</option>
        </select>
      </div>

      <label for="amount" class="small-text form-label">Amount</label>
      <div class="input-group mb-3">
        <input class="form-control" type="number" id="amount" name="amount" placeholder="$0" value="" required>
      </div>

      <div >

      <img id="address-img" src="./images/btc.jpeg" width="161" height="174" />

      </div>
      <label for="amount" class="small-text form-label">Address</label>
      <div class="input-group mb-3">
        <input class="form-control" type="text" id="address-text" name="address-text" placeholder="$0" value="" required readonly disabled>
    
      </div>
      <a class="small-text general-color" href="javascript:void(0);" onclick="copyToClipboard(document.getElementById('address-text').getAttribute('placeholder'))">Click here to copy Address</a>

        <script>
          function copyToClipboard(text) {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
          }
        </script>
      <input class="d-none" id="email" name="email" value="<?php echo $_SESSION['email']; ?>" />

      <button type="submit" class="btn bg-red text-white w-100">Submit</button>
    </form>
    </div>
      

    <div class="withdraw">
        
      <div onclick="toggleWithdraw()" class="close-btn">
          ×
      </div>
      <img src="./images/logo.svg">
      
      <div class="withdraw1">
        <p class="balance-number mb-3">Withdraw</p>
        <p class="small-text mb-4">To continue you are required to pay a brokers fee</p>

        <a href="javascript:void(0);" class="def-btn bg-red text-white w-75" onclick="togglew1()">Submit</a>
      </div>


      <form class="withdraw2" id="withdraw1" action="" method="post" enctype="multipart/form-data">
      <div class="form1">

      
    <?php echo $_SESSION['message'];?>
      <div class="mb-3">
        <label for="feedepositmethod" class="small-text form-label">Deposit Method</label>
        <select id="feedepositmethod" name="feedepositmethod" class="form-select" aria-label="Deposit Method" onchange="feeaddresschange()" required>
          <option selected>Select Deposit Method</option>
          <option value="1">BTC/Bitcoin</option>
          <option value="2">BCH/Bitcoin cash</option>
          <option value="3">ETH/Etheruem</option>
          <option value="4">USDT</option>
          <option value="5">SOL/Solana</option>
        </select>
      </div>

      <label for="amount" class="small-text form-label">Amount</label>
      <div class="input-group mb-3">
        <input class="form-control" type="number" id="amount" name="amount" placeholder="$0" value="" required>
      </div>

      <div>

      <img id="feeaddress-img" src="./images/btc.jpeg" width="161" height="174" />

      </div>
      <label for="amount" class="small-text form-label">Address</label>
      <div class="input-group mb-3">
        <input class="form-control" type="text" id="feeaddress-text" name="feeaddress-text" placeholder="$0" value="" required readonly disabled>
    
      </div>
      <a class="small-text general-color" href="javascript:void(0);" onclick="copyToClipboard(document.getElementById('address-text').getAttribute('placeholder'))">Click here to copy Address</a>

        <script>
          function copyToClipboard(text) {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
          }
        </script>
      <!-- <input class="d-none" id="email" name="email" value="<?php echo $_SESSION['email']; ?>" /> -->
      <a type="submit" href="#" onclick="toform2(event)" class="btn bg-red text-white w-100">Submit</a>
      <!-- <button type="submit" onclick="toform2(event)" class="btn bg-red text-white w-100">Submit</button> -->
    <!-- </form> -->
    <!-- </div>  -->
    
    <!-- <form class="withdraw-screenshot" action="" method="post"> -->
      <?php echo $_SESSION['message'];?>
  
        
    </div>
    <div class="form2">
      <label for="withdraw-screenshot" class="small-text form-label">Amount</label>
        <div class="input-group mb-3">
          <input class="form-control" type="file" id="withdraw_screenshot" name="withdraw_screenshot" accept=".png, .jpg, .jpeg">
        </div>
        <a type="submit" href="#" onclick="feesubmit(event)" class="btn bg-red text-white w-100">Submit</a>
        <!-- <button type="submit" class="btn bg-red text-white w-100" onclick="feesubmit(event)">Submit</button> -->
    </div>
        <div class="form3">
  
        
          <?php echo $_SESSION['message'];?>
          <div class="mb-3">
            <label for="withdraw_method" class="small-text form-label">Withdrawal Method</label>
            <select id="withdraw_method" name="withdraw_method" class="form-select" aria-label="Withdraw Method" >
              <option selected>Select Withdrawal Method</option>
              <option value="2">BCH/Bitcoin cash</option>
              <option value="1">BTC/Bitcoin</option>
              <option value="3">ETH/Etheruem</option>
              <option value="4">USDT</option>
              <option value="5">Solana/SOL</option>
            </select>
          </div>
    
          <label for="withdraw_amount" class="small-text form-label">Amount</label>
          <div class="input-group mb-3">
            <input class="form-control" type="number" id="withdraw_amount" name="withdraw_amount" placeholder="$0" value="" >
          </div>

          <label for="wallet_address" class="small-text form-label">Wallet Address</label>
          <div class="input-group mb-3">
            <input class="form-control" type="text" id="wallet_address" name="wallet_address" placeholder="Input Address" value="" >
        
          </div>
          <input class="d-none" id="withdraw_email" name="withdraw_email" value="<?php echo $_SESSION['email']; ?>" />
          <a type="submit" href="#" onclick="withdrawsubmit(event)" class="btn bg-red text-white w-100">Submit</a>
          <!-- <button type="submit" onclick="withdrawsubmit(event)" class="btn bg-red text-white w-100">Submit</button> -->
    
          
        </div>
        <div class="withdraw_success">
          <img src="./images/success.svg"/>
          <p class="mt-3 sub-header">Transaction Complete</p>
          <a type="submit" href="#" onclick="toggleWithdraw()" class="mt-2 btn bg-red text-white w-100">Done</a>

        </div>
      </form>
      </div> 

    <div style="height: 100px;"></div>

    <section class="bg-black">
    <div class="container">
      <div class="row">
        <p class="sub-header text-center">Advanta Investment</p>
        <h3 class="normal-header text-center">How Does it Work?</h3>

        <img src="./images/video.png" class="mx-auto video-img" />
      </div>
    </div>
  </section>
  
  </div>

  <footer class="app-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="text-transform: uppercase;">
          <p class="footer-text general-color mt-4">call us</p>
          <a href="tel:+447414269127"><p class="footer-text">+44 7414 269127</p></a>
        </div>
        
        <div class="col-md-6" style="text-transform: uppercase;">
          <p class="footer-text general-color mt-4">email us</p>
          <a href="mailto:advantawealthmanagement@gmail.com"><p class="footer-text">advantawealthmanagement@gmail.com</p></a>
          
        </div>
        
      </div>
    </div>
    
  </footer>
  
  <script>
    jQuery.validator.setDefaults({
      debug: true,
      success: "valid"
    });

    function toggleDeposit() {
        $(".deposit").toggle("flex");
        $(".blur-bg").toggle();
    }
    function toggleWithdraw() {
        $(".withdraw").toggle("flex");
        $(".withdraw1").toggle("flex");
        $(".blur-bg").toggle();
    }
    function togglew1(){
      $(".withdraw1").toggle("flex");
      $(".withdraw2").toggle("flex");
    }
    function toform2(event){
      event.preventDefault();
      // return validateForm();
      document.querySelector('#withdraw1').reportValidity();
      console.log(document.querySelector('#withdraw1').reportValidity(), $("#depositmethod").val())
      if ($("#feedepositmethod").val() > 0 && document.querySelector('#withdraw1').reportValidity() == true){
        $(".form1").toggle("flex");
        $(".form2").toggle("flex");
        document.querySelector('#withdraw_screenshot').setAttribute("required","required");
        
      }
    }

    function feesubmit(event){
      event.preventDefault();
      if (document.querySelector('#withdraw1').reportValidity() == true){
        $(".form2").toggle("flex");
        $('.form3').toggle("flex");
        
        document.querySelector('#withdraw_amount').setAttribute("required","required");
        document.querySelector('#withdraw_method').setAttribute("required","required");
        document.querySelector('#wallet_address').setAttribute("required","required");
      }
      // $('#withdraw1').submit();
      

    }

    function withdrawsubmit(event){
      event.preventDefault();
      if (document.querySelector('#withdraw1').reportValidity() == true){
        // $(".form2").toggle("flex");
        $('.form3').toggle("flex");
        $(".withdraw_success").toggle("flex");
        window.setTimeout(function(){
          $('#withdraw1').submit();
          $('#withdraw2').submit();     
          }, 5000);
      }
      // $('#withdraw2').toggle("flex");
      // $(".withdraw-success").toggle("flex");
      // window.setTimeout(function(){
      //   $('#withdraw1').submit();
      //   $('#withdraw2').submit();     
      //   }, 5000);
      
      
      // $('#withdraw2').toggle("flex");

    }

    function addresschange(){
      console.log($('#depositmethod').find(":selected").val())
      // $('#address-text').toggleClass('hidden')
      if ($('#depositmethod').find(":selected").val() == 1){
        $('#address-text').attr("placeholder", "bc1qd6rjew937mhrx98pcauvm03j5s6nl0p4s4mkl0");
        $('#address-img').attr("src", "/images/btc.jpeg");
      } else if($('#depositmethod').find(":selected").val() == 2){
        $('#address-text').attr("placeholder", "qrdtvvu9gmyw6xzvrwdwdcp5p6djrm74ysglju76c9");
        $('#address-img').attr("src", "/images/bch.jpeg");
      } else if($('#depositmethod').find(":selected").val() == 3){
        $('#address-text').attr("placeholder", "0x7938a23f2558b0BA00fdd70D9f25474182386801");
        $('#address-img').attr("src", "/images/eth.jpeg");
      } else if($('#depositmethod').find(":selected").val() == 4){
        $('#address-text').attr("placeholder", "0x7e0F28A96072aCA27DB51f4E4cb812E21e5E6B37");
        $('#address-img').attr("src", "/images/usdt.jpeg");
      } else if($('#depositmethod').find(":selected").val() == 5){
        $('#address-text').attr("placeholder", "39RpXE8jRpAYYLgJ5nnbvJXmT8vn2AaKPggGmkjgnNXR");
        $('#address-img').attr("src", "/images/sol.jpeg");
      }
    }

    function feeaddresschange(){
      console.log($('#feedepositmethod').find(":selected").val())
      // $('#address-text').toggleClass('hidden')
      if ($('#feedepositmethod').find(":selected").val() == 1){
        $('#feeaddress-text').attr("placeholder", "bc1qd6rjew937mhrx98pcauvm03j5s6nl0p4s4mkl0");
        $('#feeaddress-img').attr("src", "/images/btc.jpeg");
      } else if($('#feedepositmethod').find(":selected").val() == 2){
        $('#feeaddress-text').attr("placeholder", "qrdtvvu9gmyw6xzvrwdwdcp5p6djrm74ysglju76c9");
        $('#feeaddress-img').attr("src", "/images/bch.jpeg");
      } else if($('#feedepositmethod').find(":selected").val() == 3){
        $('#feeaddress-text').attr("placeholder", "0x7938a23f2558b0BA00fdd70D9f25474182386801");
        $('#feeaddress-img').attr("src", "/images/eth.jpeg");
      } else if($('#feedepositmethod').find(":selected").val() == 4){
        $('#feeaddress-text').attr("placeholder", "0x7e0F28A96072aCA27DB51f4E4cb812E21e5E6B37");
        $('#feeaddress-img').attr("src", "/images/usdt.jpeg");
      } else if($('#feedepositmethod').find(":selected").val() == 5){
        $('#feeaddress-text').attr("placeholder", "39RpXE8jRpAYYLgJ5nnbvJXmT8vn2AaKPggGmkjgnNXR");
        $('#feeaddress-img').attr("src", "/images/sol.jpeg");
      }
    }

    $('.butt').on('click', function() {
      $('#mobile-menu').toggleClass('hidden');
      $('.overlay-menu').toggleClass('hidden');
      $('header').toggleClass('hidden');
    })
    $('.overlay-menu').on('click', function() {
      $('#mobile-menu').toggleClass('hidden');
      $('.overlay-menu').toggleClass('hidden');
      $('header').toggleClass('hidden');
    })
    $(document).ready(function(){
        setTimeout(function() {
          <?php
          if( $_GET['status'] == 'dsuccess') {
              echo 'alert("Deposit Successful. Admin would verify and your balance would reflect");';
          }
          elseif( $_GET['status'] == 'derror'){
            echo 'alert("Deposit Failed.");';
          }
          elseif( $_GET['status'] == 'wsuccess') {
            echo 'alert("Withdrawal Successful. Admin would verify and your balance would reflect");';
          }
          elseif( $_GET['status'] == 'werror'){
            echo 'alert("Withdrawal Failed.");';
          }
          elseif( $_GET['status'] == 'try'){
            echo 'alert("Please Try Again");';
          }
          ?>
        }, 500);
    });
    </script>
  <script src="js/bootstrap.bundle.min.js"></script>
  <?php
    }
?>
</body>
</html>
