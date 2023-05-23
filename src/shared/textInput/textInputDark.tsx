import {Formik, FormikContext, useFormik} from 'formik';
import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './testInputDark.styles';
import {validationSchema} from '@gym-app/validators/yup';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  onSubmit: (values: any) => void;

  title: string;
}
const TextInputDark = (props: Props) => {
  const {title, onSubmit} = props;
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <Formik initialValues={{text: ''}} onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.mainContainer}>
            <LinearGradient
              colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)']}
              start={{x: 0, y: 0}} // Top-left corner
              end={{x: 0, y: 1}} // Bottom-left corner
              style={[styles.mainContainer]}>
              <TextInput
                onChangeText={handleChange('text')}
                onBlur={handleBlur('text')}
                value={values.text}
                style={styles.textInput}
                cursorColor={'white'}
              />
            </LinearGradient>
          </View>
        </>
      )}

      {/* {formik.initialValues.text && (
        <Text style={styles.errorText}>{'formik.errors.name'}</Text>
      )} */}
    </Formik>
  );
};

export default TextInputDark;
