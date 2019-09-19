import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMSEDUCADOR = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        name: 'Painel de Controle',
        type: 'link',
        icon: 'ti-hoDashboardme'
      },
      {
        state: 'educador',
        name: 'Meus dados',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'aluno',
        name: 'Aluno',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'cadastro',
            name: 'Cadastrar Aluno'
          },
          {
            state: 'lista',
            name: 'Lista de Alunos'
          },
          {
            state: 'lista-inativos',
            name: 'Lista de Alunos Inativos'
          },
        ]
      },
      {
        state: 'exercicios',
        name: 'Exercício',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'cadastro',
            name: 'Cadastrar Exercício'
          },
          {
            state: 'lista',
            name: 'Lista de Exercícios'
          }
        ]
      }
    ]
  },
];

const MENUITEMSADMINISTRADOR = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        name: 'Painel de Controle',
        type: 'link',
        icon: 'ti-hoDashboardme'
      },
      
      {
        state: 'admin',
        name: 'Profissional',
        type: 'sub',
        icon: 'ti-user',
        children: [
          {
            state: 'cadastro',
            name: 'Cadastrar Profissional'
          },
          {
            state: 'lista',
            name: 'Lista de Profissionais'
          },
          {
            state: 'lista-inativos',
            name: 'Lista de Profissionais Inativos'
          },
        ]
      },
      {
        state: 'exercicios',
        name: 'Exercício',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'cadastro',
            name: 'Cadastrar Exercício'
          },
          {
            state: 'lista',
            name: 'Lista de Exercícios'
          }
        ]
      }
    ]
  },
];
//--------------------------------------------------------------------

let MENUITEMS;

const perfil = localStorage.getItem("perfilASG");

if( perfil != null && perfil.toString() == "Admin") {
  MENUITEMS = MENUITEMSADMINISTRADOR;
} else {
  MENUITEMS = MENUITEMSEDUCADOR;
}

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
