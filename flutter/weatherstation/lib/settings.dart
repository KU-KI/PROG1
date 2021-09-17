import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:weatherstation/preferences_service.dart';
import 'models.dart';

class Settings extends StatefulWidget {
  const Settings({Key? key}) : super(key: key);

  @override
  State<Settings> createState() => _SettingsState();
}

class _SettingsState extends State<Settings> {
  final _nameAM1Controller = TextEditingController();
  final _urlAM1Controller = TextEditingController();

  @override
  void initState() {
    getSettings();
  }

  getSettings() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    _nameAM1Controller.text = prefs.getString('nameAM1') ?? 'Monitor vzduchu 1';
    _urlAM1Controller.text =
        prefs.getString('urlAM1') ?? 'http://192.168.1.218/api';
    // setState(() {});
  }

  setSettings(String key, String value) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.setString(key, value);
  }

  @override
  Widget build(BuildContext context) {
    var jsonExample = '''{
    "temp": "21.7",    
    "humi": "42.4", 
    "pres": "1021.4",
    "kvalVzduchu": "19"
  }''';
    return Scaffold(
        appBar: AppBar(
          title: const Text('Nastavenia'),
        ),
        body: Container(
          height: 250,
          margin: const EdgeInsets.all(4),
          child: Card(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: ListView(children: [
                const Text('Monitor vzduchu 1',
                    style: TextStyle(
                        color: Colors.blue,
                        fontSize: 16,
                        fontWeight: FontWeight.bold)),
                ListTile(
                  title: TextField(
                    controller: _nameAM1Controller,
                    decoration: const InputDecoration(labelText: 'Názov'),
                    onChanged: (String value) {
                      setSettings('nameAM1', value);
                    },
                  ),
                ),
                ListTile(
                  title: TextField(
                    controller: _urlAM1Controller,
                    decoration:
                        const InputDecoration(labelText: 'URL adresa API'),
                    onChanged: (String value) {
                      setSettings('urlAM1', value);
                    },
                  ),
                ),
                Column(
                  children: [
                    const Text(
                        'API musí poskytovať údaje v JSON formáte takto:',
                        style: TextStyle(
                            color: Colors.black,
                            fontSize: 9,
                            fontWeight: FontWeight.normal)),
                    Text(jsonExample,
                        style: const TextStyle(
                            color: Colors.black,
                            fontSize: 8,
                            fontWeight: FontWeight.normal,
                            fontStyle: FontStyle.italic)),
                  ],
                ),
              ]),
            ),
          ),
        ));
  }
}
