/*
 * Arduino Adafruit_ADS1015 library API wrapper
 */

#include "Adafruit_ADS1015.h"

#ifdef __cplusplus
extern "C"
{
#endif

Adafruit_ADS1015 *mgos_ADS1015_create(int i2cAddress);

Adafruit_ADS1115 *mgos_ADS1115_create(int i2cAddress);
  
void mgos_ADS1015_close(Adafruit_ADS1015 *ads);

void mgos_ADS1015_begin(Adafruit_ADS1015 *ads);

int mgos_ADS1015_readADC_SingleEnded(Adafruit_ADS1015 *ads, int channel);

int mgos_ADS1015_readADC_Differential_0_1(Adafruit_ADS1015 *ads);

int mgos_ADS1015_readADC_Differential_2_3(Adafruit_ADS1015 *ads);

void mgos_ADS1015_startComparator_SingleEnded(Adafruit_ADS1015 *ads, int channel, int threshold);

int mgos_ADS1015_getLastConversionResults(Adafruit_ADS1015 *ads);

void mgos_ADS1015_setGain(Adafruit_ADS1015 *ads, adsGain_t gain);

#ifdef __cplusplus
}
#endif  /* __cplusplus */
