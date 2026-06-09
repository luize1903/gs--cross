// contexts/MissionContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const MissionContext = createContext();

export const MissionProvider = ({ children }) => {
  const [missionData, setMissionData] = useState({
    energia: 100,
    oxigenio: 100,
    estabilidade: 100,
    comunicacao: 'Estável',
  });

  // Carregar dados salvos ao iniciar
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('@mission_data');
        if (storedData) {
          setMissionData(JSON.parse(storedData));
        }
      } catch (e) {
        console.error("Erro ao carregar dados", e);
      }
    };
    loadData();
  }, []);

  // Salvar dados e checar níveis críticos
  const updateMissionData = async (newData) => {
    const updatedData = { ...missionData, ...newData };
    setMissionData(updatedData);
    
    try {
      await AsyncStorage.setItem('@mission_data', JSON.stringify(updatedData));
    } catch (e) {
      console.error("Erro ao salvar dados", e);
    }

    // Alerta de níveis críticos (Requisito obrigatório)
    if (updatedData.energia < 20 || updatedData.oxigenio < 20 || updatedData.estabilidade < 20) {
      Alert.alert(
        "⚠️ ALERTA CRÍTICO ⚠️", 
        "Sistemas vitais abaixo de 20%! Ação imediata necessária."
      );
    }
  };

  return (
    <MissionContext.Provider value={{ missionData, updateMissionData }}>
      {children}
    </MissionContext.Provider>
  );
};