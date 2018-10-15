package com.newrnproject2;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.ninty.system.setting.SystemSettingPackage;
import com.oblador.shimmer.RNShimmerPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.krazylabs.OpenAppSettingsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

// public class MainApplication extends Application implements ReactApplication {

//   private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//     @Override
//     public boolean getUseDeveloperSupport() {
//       return BuildConfig.DEBUG;
//     }

//     @Override
//     protected List<ReactPackage> getPackages() {
//       return Arrays.<ReactPackage>asList(
//           new MainReactPackage(),
            
            
            

// new NavigationReactPackage()
//       );
//     }

//     @Override
//     protected String getJSMainModuleName() {
//       return "index";
//     }
//   };

//   @Override
//   public ReactNativeHost getReactNativeHost() {
//     return mReactNativeHost;
//   }

//   @Override
//   public void onCreate() {
//     super.onCreate();
//     SoLoader.init(this, /* native exopackage */ false);
//   }
// }

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new VectorIconsPackage(),
      new SystemSettingPackage(),
      new RNShimmerPackage(),
      new RNI18nPackage(),
      new RNDeviceInfo(),
      new OpenAppSettingsPackage(),
      new LinearGradientPackage(),
      new FastImageViewPackage(),
      new MapsPackage()
      );

  }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}