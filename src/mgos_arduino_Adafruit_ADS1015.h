/*
 * Arduino Adafruit_ADS1015 library API wrapper
 */

#include "Adafruit_ADS1015.h"

#ifdef __cplusplus
extern "C"
{
#endif

/*
 * Create an ADS1015 instance, with the given I2C address.
 */
Adafruit_ADS1015 *mgos_ADS1015_create(int i2cAddress);

/*
 * Create an ADS1115 instance, with the given I2C address.
 */
Adafruit_ADS1115 *mgos_ADS1115_create(int i2cAddress);

/*
 * Close the given ADS1015/ADS1115 instance; no methods can be called on this
 * instance after that.
 */
void mgos_ADS1015_close(Adafruit_ADS1015 *ads);

/*
 * Set up the ADS1015/ADS1115 instance; no methods can be called on this
 * instance after that.
 */
void mgos_ADS1015_begin(Adafruit_ADS1015 *ads);

/*
 * Get a single-ended ADC reading from the given `channel`.
 */
int mgos_ADS1015_readADC_SingleEnded(Adafruit_ADS1015 *ads, int channel);

/*
 * Read the conversion results, measuring the difference between the P (AIN0)
 * and N (AIN1) input. Returns a signed value since the difference can be
 * either positive or negative.
 */
int mgos_ADS1015_readADC_Differential_0_1(Adafruit_ADS1015 *ads);

/*
 * Read the conversion results, measuring the difference between the P (AIN2)
 * and N (AIN3) input. Returns a signed value since the difference can be
 * either positive or negative.
 */
int mgos_ADS1015_readADC_Differential_2_3(Adafruit_ADS1015 *ads);

/*
 * Set up the comparator to operate in basic mode, causing the ALERT/RDY pin to
 * assert (go from high to low) when the ADC value exceeds the specified
 * `threshold`.
 */
void mgos_ADS1015_startComparator_SingleEnded(Adafruit_ADS1015 *ads, int channel, int threshold);

/*
 * In order to clear the comparator, we need to read the conversion results.
 * This function reads the last conversion results without changing the config
 * value.
 */
int mgos_ADS1015_getLastConversionResults(Adafruit_ADS1015 *ads);

/*
 * Set the gain and input voltage range; one of the following:
 *
// - `GAIN_TWOTHIRDS`
// - `GAIN_ONE`
// - `GAIN_TWO`
// - `GAIN_FOUR`
// - `GAIN_EIGHT`
// - `GAIN_SIXTEEN`
 */
void mgos_ADS1015_setGain(Adafruit_ADS1015 *ads, adsGain_t gain);

#ifdef __cplusplus
}
#endif  /* __cplusplus */
