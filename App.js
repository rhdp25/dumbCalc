import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  let [calculate, setCalculate] = useState(0);

  const inputNumber = (value) => {
    if (calculate === 0) {
      setCalculate(value);
    } else {
      setCalculate(calculate + "" + value);
    }
  };

  const calculateResult = () => {
    let results = eval(calculate);
    setCalculate(results);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.brand}>dumbCalc</Text>
      <View style={styles.layoutResult}>
        <Text style={styles.textResult}>{calculate}</Text>
      </View>

      <View style={styles.layoutClear}>
        <TouchableOpacity onPress={() => setCalculate(0)} style={styles.btnClear}>
          <Text style={styles.clears}>C</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layoutNumber}>
        <TouchableOpacity onPress={() => inputNumber(7)} style={styles.btn}>
          <Text style={styles.numberstyle}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber(8)} style={styles.btn}>
          <Text style={styles.numberstyle}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber(9)} style={styles.btn}>
          <Text style={styles.opratorStyle}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber("+")} style={styles.btnOpt}>
          <Text style={styles.opratorStyle}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layoutNumber}>
        <TouchableOpacity onPress={() => inputNumber(4)} style={styles.btn}>
          <Text style={styles.numberstyle}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber(5)} style={styles.btn}>
          <Text style={styles.numberstyle}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber(6)} style={styles.btn}>
          <Text style={styles.opratorStyle}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber("-")} style={styles.btnOpt}>
          <Text style={styles.opratorStyle}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layoutNumber}>
        <TouchableOpacity onPress={() => inputNumber(3)} style={styles.btn}>
          <Text style={styles.numberstyle}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber(2)} style={styles.btn}>
          <Text style={styles.numberstyle}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber(1)} style={styles.btn}>
          <Text style={styles.opratorStyle}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber("*")} style={styles.btnOpt}>
          <Text style={styles.opratorStyle}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layoutNumber}>
        <TouchableOpacity onPress={() => inputNumber(0)} style={styles.btn}>
          <Text style={styles.numberstyle}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber("00")} style={styles.btn}>
          <Text style={styles.numberstyle}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculateResult()} style={styles.btnResult}>
          <Text style={styles.numberstyle}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputNumber("/")} style={styles.btnOpt}>
          <Text style={styles.numberstyle}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#140C00",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  brand: {
    color: "#F5F5F5",
    fontSize: 20,
    fontWeight: "200",
    marginHorizontal: 23,
    marginBottom: 15,
    marginTop: 20,
  },
  layoutNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 23,
    marginTop: 15,
  },
  layoutClear: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 23,
    marginTop: 15,
  },
  numberstyle: {
    color: "#F5F5F5",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  opratorStyle: {
    color: "#F5F5F5",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  clears: {
    color: "#F5F5F5",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  layoutResult: {
    paddingVertical: 20,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#85E0C9",
    borderColor: "#140C00",
    borderWidth: 2,
  },
  textResult: {
    fontSize: 45,
    color: "#444449",
    textAlign: "right",
  },
  btn: {
    backgroundColor: "#444449",
    borderRadius: 5,
    width: 65,
    height: 65,
    justifyContent: "center",
  },
  btnOpt: {
    backgroundColor: "#545470",
    borderRadius: 5,
    width: 65,
    height: 65,
    justifyContent: "center",
  },
  btnResult: {
    backgroundColor: "#14CA9C",
    borderRadius: 5,
    width: 65,
    height: 65,
    justifyContent: "center",
  },
  btnClear: {
    backgroundColor: "#D63E64",
    borderRadius: 5,
    width: 145,
    height: 60,
    marginBottom: 10,
    justifyContent: "center",
  },
});
