import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";
import { ModalPickImage } from "../../components/ModalPickImage";

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    email,
    image,
    phone,
    password,
    confirmPassword,
    errorMessage,
    onChange,
    register,
    pickImage,
    takePhoto,
  } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image == "" ? (
            <Image
              source={require("../../../../assets/user_image.png")}
              style={styles.logoImage}
            />
          ) : (
            <Image
              source={{uri: image}}
              style={styles.logoImage}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.logoText}>SELECCIONE UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>

          <CustomTextInput
            placeholder="Nombre"
            keyboardType="default"
            image={require("../../../../assets/user.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomTextInput
            placeholder="Apellidos"
            keyboardType="default"
            image={require("../../../../assets/my_user.png")}
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />

          <CustomTextInput
            placeholder="Correo Electronico"
            keyboardType="email-address"
            image={require("../../../../assets/email.png")}
            property="email"
            onChangeText={onChange}
            value={email}
          />

          <CustomTextInput
            placeholder="Telefono"
            keyboardType="numeric"
            image={require("../../../../assets/phone.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
          />

          <CustomTextInput
            placeholder="Contraseña"
            keyboardType="default"
            image={require("../../../../assets/password.png")}
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />

          <CustomTextInput
            placeholder="Confirmar Contraseña"
            keyboardType="default"
            image={require("../../../../assets/confirm_password.png")}
            property="confirmPassword"
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry={true}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="CONFIRMAR" onPress={() => register()} />
          </View>
        </ScrollView>
      </View>

          <ModalPickImage 
          openGallery={ pickImage }
          openCamera={ takePhoto }
          modalUseState= {  modalVisible}
          setModalUseState={setModalVisible}
          />

    </View>
  );
};
