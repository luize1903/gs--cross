import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MissionContext } from '../contexts/MissionContext';

export default function UpdateSensors() {
  const router = useRouter();
  const { missionData, updateMissionData } = useContext(MissionContext);
  
  // Pegando os valores atuais para preencher o formulário
  const [energia, setEnergia] = useState(missionData.energia.toString());
  const [oxigenio, setOxigenio] = useState(missionData.oxigenio.toString());
  const [estabilidade, setEstabilidade] = useState(missionData.estabilidade.toString());
  const [comunicacao, setComunicacao] = useState(missionData.comunicacao);

  const handleUpdate = () => {
    // Validação de formulário técnica
    const numEnergia = parseInt(energia);
    const numOxigenio = parseInt(oxigenio);
    const numEstabilidade = parseInt(estabilidade);

    // Valida se os campos numéricos são realmente números
    if (isNaN(numEnergia) || isNaN(numOxigenio) || isNaN(numEstabilidade)) {
      Alert.alert(" FALHA NA ENTRADA", "Protocolo inválido. Apenas valores numéricos são permitidos em Energia, O2 e Estabilidade.");
      return;
    }

    // Valida se a porcentagem está entre 0 e 100
    if (numEnergia < 0 || numEnergia > 100 || numOxigenio < 0 || numOxigenio > 100 || numEstabilidade < 0 || numEstabilidade > 100) {
      Alert.alert("PARÂMETROS FORA DA FAIXA", "As porcentagens devem estar entre 0 (Crítico) e 100 (Estável).");
      return;
    }

    // Valida se o texto de comunicação não está vazio
    if (comunicacao.trim() === '') {
      Alert.alert(" ERRO DE COMUNICAÇÃO", "O status de comunicação não pode ficar em branco.");
      return;
    }

    // Envia TODOS os dados atualizados para o Context API
    updateMissionData({ 
      energia: numEnergia, 
      oxigenio: numOxigenio,
      estabilidade: numEstabilidade,
      comunicacao: comunicacao
    });
    
    Alert.alert("SUCESSO", "Sistemas recalibrados e dados sincronizados.");
    router.back();
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>TERMINAL DE RECALIBRAÇÃO</Text>
        <Text style={styles.subtitle}>Inicie protocolos de ajuste nos sistemas vitais abaixo:</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Porcentagem de Energia:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={energia}
            onChangeText={setEnergia}
            placeholderTextColor="#4B5563"
            maxLength={3}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Porcentagem de Oxigênio (O2):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={oxigenio}
            onChangeText={setOxigenio}
            placeholderTextColor="#4B5563"
            maxLength={3}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Estabilidade Orbital (%):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={estabilidade}
            onChangeText={setEstabilidade}
            placeholderTextColor="#4B5563"
            maxLength={3}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Status de Comunicação (Texto):</Text>
          <TextInput
            style={styles.input}
            value={comunicacao}
            onChangeText={setComunicacao}
            placeholderTextColor="#4B5563"
            placeholder="Ex: Estável, Crítico, Offline"
          />
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handleUpdate}>
          <Text style={styles.confirmButtonText}>Confirmar Atualizações</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712', 
  },
  scrollContainer: {
    padding: 25,
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    color: '#22D3EE', 
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 14,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#F9FAFB', 
    fontSize: 15,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#111827', 
    color: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#374151', 
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    fontFamily: 'monospace',
  },
  confirmButton: {
    backgroundColor: '#22D3EE', 
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#22D3EE',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  confirmButtonText: {
    color: '#030712', 
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});
