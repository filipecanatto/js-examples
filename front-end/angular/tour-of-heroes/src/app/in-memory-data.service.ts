import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Super Homem' },
      { id: 13, name: 'Mulher Maravilha' },
      { id: 14, name: 'Wolverine' },
      { id: 15, name: 'Capitao America' },
      { id: 16, name: 'Hulk' },
      { id: 17, name: 'Dr. Estranho' },
      { id: 18, name: 'Homem Formiga' },
      { id: 19, name: 'Homem Aranha' },
      { id: 20, name: 'Homem de Ferro' }
    ];
    return {heroes};
  }
}