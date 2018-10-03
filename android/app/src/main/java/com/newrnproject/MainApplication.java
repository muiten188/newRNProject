package com.newrnproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.ninty.system.setting.SystemSettingPackage;
import com.oblador.shimmer.RNShimmerPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.krazylabs.OpenAppSettingsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(new MainReactPackage(), new VectorIconsPackage(), new SystemSettingPackage(),
        new RNShimmerPackage(), new RNI18nPackage(), new RNDeviceInfo(), new OpenAppSettingsPackage());

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
