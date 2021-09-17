class Weather {
  String _temp = '';
  String _humi = '';
  String _pres = '';
  String _kval = '';

  String get temp {
    return _temp;
  }

  // set temp(String temp) {
  //   _temp = temp;
  // }

  String get humi {
    return _humi;
  }

  String get pres {
    return _pres;
  }

  String get kval {
    return _kval;
  }

  Weather(
    this._temp,
    this._humi,
    this._pres,
    this._kval,
  );

  Weather.fromJson(Map<String, dynamic> json) {
    _temp = json['temp'];
    _humi = json['humi'];
    _pres = json['pres'];
    _kval = json['kvalVzduchu'];
  }
}
