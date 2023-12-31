import { Text, StyleSheet } from "react-native"

export default function MinMax(props) {
    const { min, max } = props;

    if (max > min) {
        message = `O maior valor é max = ${max}`;
    } else if (min > max) {
        message = `O maior valor é min = ${min}`;
    } else {
        message = "os valores sao iguais";
    }

    return (
        <Text style={[styles.text]}>{message}</Text>
    );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    color: 'white'
  }
  });