// Arduino Adafruit_ADS1015 library API. Source C API is defined at:
// [mgos_arduino_Adafruit_ADS1015.h]

let Adafruit_ADS1015 = {
  _create: ffi('void *mgos_ADS1015_create(int)'),
  _create_ads1115: ffi('void *mgos_ADS1115_create(int)'),
  _close: ffi('void mgos_ADS1015_close(void *)'),
  _begin: ffi('void mgos_ADS1015_begin(void *)'),
  _rse: ffi('int mgos_ADS1015_readADC_SingleEnded(void *,int)'),
  _rd01: ffi('int mgos_ADS1015_readADC_Differential_0_1(void *)'),
  _rd23: ffi('int mgos_ADS1015_readADC_Differential_2_3(void *)'),
  _sc: ffi('void mgos_ADS1015_startComparator_SingleEnded(void *, int, int )'),
  _glc: ffi('int mgos_ADS1015_getLastConversionResults(void *)'),
  _sg: ffi('void mgos_ADS1015_setGain(void *, int)'),

  // ## **`Adafruit_ADS1015.create(i2cAddress)`**
  // Create an ADS1015 instance: an object with the methods described below.
  // `i2cAddress` is an I2C address of the ADS1015.
  create: function(i2cAddress) {
    let obj = Object.create(Adafruit_ADS1015._proto);
    obj.ads = Adafruit_ADS1015._create(i2cAddress);
    return obj;
  },

  // ## **`Adafruit_ADS1115.create(i2cAddress)`**
  // Create an ADS1115 instance: an object with the methods described below.
  // `i2cAddress` is an I2C address of the ADS1115.
  create_ads1115: function(i2cAddress) {
    let obj = Object.create(Adafruit_ADS1015._proto);
    obj.ads = Adafruit_ADS1015._create_ads1115(i2cAddress);
    return obj;
  },

  _proto: {
    // ## **`myADS.close()`**
    // Close an instance; no methods can be called on this instance after that.
    // Return value: none.
    close: function() {
      return Adafruit_ADS1015._close(this.ads);
    },

    // ## **`myADS.begin()`**
    // Set up the ADS1015/ADS1115 hardware
    begin: function() {
      return Adafruit_ADS1015._begin(this.ads);
    },

    // ## **`myADS.readADC_SingleEnded(channel)`**
    // Get a single-ended ADC reading from the given `channel`.
    readADC_SingleEnded: function(channel) {
      return Adafruit_ADS1015._rse(this.ads, channel);
    },

    // ## **`myADS.readADC_Differential_0_1()`**
    // Read the conversion results, measuring the difference between the P
    // (AIN0) and N (AIN1) input. Returns a signed value since the difference
    // can be either positive or negative.
    readADC_Differential_0_1: function() {
      return Adafruit_ADS1015._rd01(this.ads);
    },

    // ## **`myADS.readADC_Differential_0_1()`**
    // Read the conversion results, measuring the difference between the P
    // (AIN2) and N (AIN3) input. Returns a signed value since the difference
    // can be either positive or negative.
    readADC_Differential_2_3: function() {
      return Adafruit_ADS1015._rd23(this.ads);
    },

    // ## **`myADS.startComparator_SingleEnded(channel, threshold)`**
    // Set up the comparator to operate in basic mode, causing the ALERT/RDY
    // pin to assert (go from high to low) when the ADC value exceeds the
    // specified `threshold`.
    // Return value: none.
    startComparator_SingleEnded: function(channel, threshold) {
      return Adafruit_ADS1015._sc(this.ads, channel, threshold);
    },

    // ## **`myADS.getLastConversionResults()`**
    // In order to clear the comparator, we need to read the conversion
    // results.  This function reads the last conversion results without
    // changing the config value.
    getLastConversionResults: function() {
      return Adafruit_ADS1015._glc(this.ads);
    },

    // ## **`myADS.setGain(gain)`**
    // Set the gain and input voltage range; one of the following:
    //
    // - `Adafruit_ADS1015.GAIN_TWOTHIRDS`
    // - `Adafruit_ADS1015.GAIN_ONE`
    // - `Adafruit_ADS1015.GAIN_TWO`
    // - `Adafruit_ADS1015.GAIN_FOUR`
    // - `Adafruit_ADS1015.GAIN_EIGHT`
    // - `Adafruit_ADS1015.GAIN_SIXTEEN`
    //
    // Return value: none.
    setGain: function(gain) {
      return Adafruit_ADS1015._sg(this.ads,gain);
    },
  },

  GAIN_TWOTHIRDS: 0x0000,
  GAIN_ONE: 0x0200,
  GAIN_TWO: 0x0400,
  GAIN_FOUR: 0x0600,
  GAIN_EIGHT: 0x0800,
  GAIN_SIXTEEN: 0x0A00,
}
