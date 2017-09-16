// Arduino Adafruit_ADS1015 library API. Source C API is defined at:
// [mgos_arduino_Adafruit_ADS1015.h]

let Adafruit_ADS1015 = {
  _create: ffi('void *mgos_ADS1015_create(int)'),
  _close: ffi('void mgos_ADS1015_close(void *)'),
  _begin: ffi('void mgos_ADS1015_begin(void *)'),
  _rse: ffi('int mgos_ADS1015_readADC_SingleEnded(void *,int)'),
  _rd01: ffi('int mgos_ADS1015_readADC_Differential_0_1(void *)'),
  _rd23: ffi('int mgos_ADS1015_readADC_Differential_2_3(void *)'),
  _sc: ffi('void mgos_ADS1015_startComparator_SingleEnded(void *, int, int )'),
  _glc: ffi('int mgos_ADS1015_getLastConversionResults(void *)'),
  _sg: ffi('void mgos_ADS1015_setGain(void *, int)'),

  _proto: {
    close: function() {
      return Adafruit_ADS1015._close(this.ads);
    },

    begin: function() {
      return Adafruit_ADS1015._begin(this.ads);
    },
	
	readADC_SingleEnded: function(channel) {
      return Adafruit_ADS1015._rse(this.ads, channel);
    },
	
	readADC_Differential_0_1: function() {
      return Adafruit_ADS1015._rd01(this.ads);
    },
	
	readADC_Differential_2_3: function() {
      return Adafruit_ADS1015._rd23(this.ads);
    },
	
	startComparator_SingleEnded: function(channel, threshold) {
      return Adafruit_ADS1015._sc(this.ads, channel, threshold);
    },
	
	getLastConversionResults: function() {
      return Adafruit_ADS1015._glc(this.ads);
    },
	
	setGain: function(gain) {
      return Adafruit_ADS1015._sg(this.ads,gain);
    },
	
  },

  create: function(i2cAddress) {
    let obj = Object.create(Adafruit_ADS1015._proto);
    obj.ads = Adafruit_ADS1015._create(i2cAddress);
    return obj;
  },

}
