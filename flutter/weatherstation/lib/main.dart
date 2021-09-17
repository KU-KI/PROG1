import 'dart:convert';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:weatherstation/settings.dart';
import 'package:weatherstation/weather.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Monitor vzduchu a počasia',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Monitor vzduchu a počasia'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  var weather = Weather('-', '-', '-', '-');
  var nameAM1 = '';

  @override
  initState() {
    fetchWeather();
  }

  Future fetchWeather() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    nameAM1 = prefs.getString('nameAM1') ?? 'Monitor vzduchu 1';
    var url =
        Uri.parse(prefs.getString('urlAM1') ?? 'http://192.168.1.218/api');
    var response = await http.get(url);

    if (response.statusCode == 200) {
      var weatherJson = json.decode(response.body);
      weather = Weather(weatherJson['temp'], weatherJson['humi'],
          weatherJson['pres'], weatherJson['kvalVzduchu']);
      // print(weather);
      setState(() {});
    } else {
      // print('Request failed with status: ${response.statusCode}.');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.settings),
            tooltip: 'Nastavenia',
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => const Settings()));
            },
          ),
          IconButton(
            icon: const Icon(Icons.menu),
            tooltip: 'Menu',
            onPressed: () {
              print('Menu');
            },
          )
        ],
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: SizedBox.fromSize(
          size: const Size(360, 270),
          child: Card(
              color: Colors.yellow,
              child: Column(children: <Widget>[
                Padding(
                  padding: const EdgeInsets.fromLTRB(0, 20, 0, 0),
                  child: Text(nameAM1,
                      style: const TextStyle(
                        color: Colors.blue,
                        fontSize: 35,
                        fontWeight: FontWeight.bold,
                      )),
                ),
                const Divider(
                  color: Colors.blue,
                  height: 5,
                  thickness: 5,
                  indent: 15,
                  endIndent: 15,
                ),
                Padding(
                  padding: const EdgeInsets.all(15.0),
                  child: Table(
                    border: TableBorder.all(style: BorderStyle.none),
                    columnWidths: const <int, TableColumnWidth>{
                      0: FlexColumnWidth(),
                      1: IntrinsicColumnWidth(),
                      // 2: FixedColumnWidth(64),
                      2: IntrinsicColumnWidth(),
                    },
                    defaultVerticalAlignment: TableCellVerticalAlignment.middle,
                    children: <TableRow>[
                      TableRow(
                        children: <Widget>[
                          const Text("Teplota: ",
                              style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 25,
                                  fontWeight: FontWeight.normal)),
                          Container(
                            alignment: Alignment.centerRight,
                            child: Text(weather.temp,
                                style: const TextStyle(
                                    fontSize: 30, fontWeight: FontWeight.bold)),
                          ),
                          Container(
                            padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                            alignment: Alignment.topLeft,
                            child: const Text(' °C',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.normal,
                                )),
                          ),
                        ],
                      ),
                      TableRow(
                        children: <Widget>[
                          const Text("Vlhkosť: ",
                              softWrap: false,
                              style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 25,
                                  fontWeight: FontWeight.normal)),
                          Container(
                            alignment: Alignment.centerRight,
                            child: Text(weather.humi,
                                style: const TextStyle(
                                    fontSize: 30, fontWeight: FontWeight.bold)),
                          ),
                          Container(
                            padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                            alignment: Alignment.topLeft,
                            child: const Text(' %',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.normal,
                                )),
                          ),
                        ],
                      ),
                      TableRow(
                        children: <Widget>[
                          const Text("Tlak: ",
                              style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 25,
                                  fontWeight: FontWeight.normal)),
                          Container(
                            alignment: Alignment.centerRight,
                            child: Text(weather.pres,
                                style: const TextStyle(
                                    fontSize: 30, fontWeight: FontWeight.bold)),
                          ),
                          Container(
                            padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                            alignment: Alignment.topLeft,
                            child: const Text(' hPa',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.normal,
                                )),
                          ),
                        ],
                      ),
                      TableRow(
                        children: <Widget>[
                          const Text("Kvalita vzduchu: ",
                              style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 25,
                                  fontWeight: FontWeight.normal)),
                          Container(
                            alignment: Alignment.centerRight,
                            child: Text(weather.kval,
                                style: const TextStyle(
                                    fontSize: 30, fontWeight: FontWeight.bold)),
                          ),
                          Container(
                            padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
                            alignment: Alignment.topLeft,
                            child: const Text('',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.normal,
                                )),
                          ),
                        ],
                      )
                    ],
                  ),
                ),
              ])),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          fetchWeather();
        },
        tooltip: 'HTTP Request',
        child: const Icon(Icons.add),
      ),
    );
  }
}
