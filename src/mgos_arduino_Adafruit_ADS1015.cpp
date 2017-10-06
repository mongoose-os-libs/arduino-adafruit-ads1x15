
#include "mgos_arduino_Adafruit_ADS1015.h"

Adafruit_ADS1015 *mgos_ADS1015_create(int i2cAddress) {
  return new Adafruit_ADS1015(i2cAddress);
}

Adafruit_ADS1115 *mgos_ADS1115_create(int i2cAddress) {
  return new Adafruit_ADS1115(i2cAddress);
}

void mgos_ADS1015_close(Adafruit_ADS1015 *ads) {
  if (ads != nullptr) {
    delete ads;
    ads = nullptr;
  }
}

void mgos_ADS1015_begin(Adafruit_ADS1015 *ads) {
  if (ads == nullptr) return;
  ads->begin();
}

int mgos_ADS1015_readADC_SingleEnded(Adafruit_ADS1015 *ads, int channel) {
  if (ads == nullptr) return 0;
  return ads->readADC_SingleEnded(channel);
}

int mgos_ADS1015_readADC_Differential_0_1(Adafruit_ADS1015 *ads) {
  if (ads == nullptr) return 0;
  return ads->readADC_Differential_0_1();
}

int mgos_ADS1015_readADC_Differential_2_3(Adafruit_ADS1015 *ads) {
  if (ads == nullptr) return 0;
  return ads->readADC_Differential_2_3();
}

void mgos_ADS1015_startComparator_SingleEnded(Adafruit_ADS1015 *ads, int channel, int threshold) {
  if (ads == nullptr) return;
  ads->startComparator_SingleEnded(channel, threshold);
}

int mgos_ADS1015_getLastConversionResults(Adafruit_ADS1015 *ads) {
  if (ads == nullptr) return 0;
  return ads->getLastConversionResults();
}

void mgos_ADS1015_setGain(Adafruit_ADS1015 *ads, adsGain_t gain) {
  if (ads == nullptr) return;
  ads->setGain(gain);
}
