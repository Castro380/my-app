import { Text } from "react-native"

export default function MinMax(props) {
    const { min, max } = props;

    if (max > min) {
        message = `O maior valor é max = ${max}`;
    } else if (min > max) {
        message = `O maior valor é min = ${min}`;
    } else {
        message = "Os valores são iguais";
    }

    return (
        <Text>{message}</Text>
    );
}