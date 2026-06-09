// app/index.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { MissionContext } from '../contexts/MissionContext';

export default function Dashboard() {
  const router = useRouter();
  const { missionData } = useContext(MissionContext);

  // Paleta de cores dinâmicas para status
  const getStatusColor = (value) => value < 20 ? '#EF4444' : '#22D3EE'; // Vermelho Crítico / Ciano Estável

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>TECNOLOGIAS DE MISSÃO ATIVAS</Text>
      
      {/* Container Principal dos Sensores */}
      <View style={styles.dashboardGrid}>
        <View style={styles.card}>
          <Text style={styles.label}>Célula de Energia (Nível):</Text>
          <Text style={[styles.value, { color: getStatusColor(missionData.energia) }]}>
            {missionData.energia}%
          </Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${missionData.energia}%`, backgroundColor: getStatusColor(missionData.energia) }]} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Nível de Oxigênio (O2):</Text>
          <Text style={[styles.value, { color: getStatusColor(missionData.oxigenio) }]}>
            {missionData.oxigenio}%
          </Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${missionData.oxigenio}%`, backgroundColor: getStatusColor(missionData.oxigenio) }]} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Estabilidade Orbital:</Text>
          <Text style={[styles.value, { color: getStatusColor(missionData.estabilidade) }]}>
            {missionData.estabilidade}%
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Status de Comunicação:</Text>
          <Text style={[styles.value, { color: missionData.comunicacao === 'Estável' ? '#22D3EE' : '#EF4444' }]}>
            {missionData.comunicacao}
          </Text>
        </View>
      </View>

      {/* Botão de ação Principal */}
      <TouchableOpacity 
        style={styles.actionButton} 
        onPress={() => router.push('/update')}
      >
        <Text style={styles.actionButtonText}>Acessar Calibração de Sistemas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712', // Deep Space Background
    padding: 20,
  },
  title: {
    color: '#E2E8F0', // Off-White Text
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    letterSpacing: 1.5,
  },
  dashboardGrid: {
    gap: 15, // Espaçamento entre cartões
  },
  card: {
    backgroundColor: '#111827', // Slate Navy Card
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#374151', // Dark Gray Border
    shadowColor: '#22D3EE',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    color: '#9CA3AF', // Light Gray Label
    fontSize: 14,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'monospace', // Estilo técnico
    marginBottom: 8,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#374151',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  actionButton: {
    backgroundColor: '#8B5CF6', // Electric Violet (Botão de ação secundário/navegação)
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});