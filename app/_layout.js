// app/_layout.js
import { Stack } from 'expo-router';
import { MissionProvider } from '../contexts/MissionContext';

export default function Layout() {
  return (
    <MissionProvider>
      <Stack screenOptions={{
        // Cores do cabeçalho Deep Space
        headerStyle: { backgroundColor: '#030712' }, // Azul-preto profundo
        headerTintColor: '#22D3EE', // Ciano Vibrante
        headerTitleStyle: { fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 },
      }}>
        <Stack.Screen name="index" options={{ title: 'Painel Central' }} />
        <Stack.Screen name="update" options={{ title: 'Calibrar Sensores' }} />
      </Stack>
    </MissionProvider>
  );
}
