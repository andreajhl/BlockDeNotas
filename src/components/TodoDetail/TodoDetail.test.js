import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import TodoDetail from './TodoDetail';

/* {
  title:"compras",
  description:"ir al super a hacer compras",
  place:"walmart",
  date:"mañana",
  id:1,
  status:"Todo"
} */
configure({adapter: new Adapter()});

describe('Extra Credit', () => {

  describe('<TodoDetail />', () => {
    let wrapper;
    let store;
    const match = {params: {id: 1}, isExact: true, path: "/edit/:id", url: "/edit/1"};
    const todos = [
      {
        title:"compras",
        description:"ir al super a hacer compras",
        place:"walmart",
        date:"mañana",
        id:1,
        status:"Todo"
      },
      {
        title:"leer",
        description:"leer Lord of the Flies",
        place:"living room",
        date:"hoy",
        id: 2,
        status:"Todo"
      }
    ]
    beforeEach(() => {
      const mockStore = configureStore([]);
      store = mockStore(todos);
      wrapper =  mount(<TodoDetail match={match} store={store} />)
      store.clearActions();
    })
    
    it('deberia recibir por props el objeto ´match´, utilizar el id de `params` para filtrar el ´todo´ que coincida con ese ´id´ y renderizar los detalles de ese todo', () => {
      // Ten en cuenta que tendras que conectar el componente con el store para traer los `todos` del store y asi poder filtrar el `todo` correcto
      // Lo que se esta testeando aca, es que el componente renderice los detalles del todo correctamente,
      // no la estructura del componente asi que eres libre de diseñar la estructura, siempre y cuando se muestren los datos del todo.
      const todo = todos[0];
      expect(wrapper.contains(todo.title)).toEqual(true)
      expect(wrapper.contains(todo.description)).toEqual(true)
      expect(wrapper.contains(todo.place)).toEqual(true)
      expect(wrapper.contains(todo.date)).toEqual(true)
    })
    
    it('deberia renderizar un "h1" que contenga el texto "No hay todo." si no existe un ´todo´ especifico que corresponda con el id de `params`', () => {
      const match = {params: {id: 3}, isExact: true, path: "/edit/:id", url: "/edit/3"};
      const wrapper =  mount(<TodoDetail match={match} store={store} />)
      expect(wrapper.find('h1')).toHaveLength(1);
      expect(wrapper.find('h1').at(0).text()).toEqual('No hay todo.');
    });
    
    it('deberia renderizar primero un `button` con el texto `Done` que al hacerle click hace un dispatch de la action `toDone`', () => {
      // El orden del boton aca es importante...
      expect(wrapper.find('button').at(0).text()).toEqual('Done');
      wrapper.find('button').at(0).simulate('click');
      const expectedAction = [{
        payload: 1,
        type: 'ToDone'
      }]
      expect(store.getActions()).toEqual(expectedAction);
    })
    
    it('deberia renderizar segundo un `button` con el texto `In Progress` que al hacerle click hace un dispatch de la action `toInProgress`', () => {
      // El orden del boton aca es importante...
      expect(wrapper.find('button').at(1).text()).toEqual('In Progress');
      wrapper.find('button').at(1).simulate('click');
      const expectedAction = [{
        payload: 1,
        type: 'ToInProgress'
      }]
      expect(store.getActions()).toEqual(expectedAction);
    })
    
    it('deberia renderizar tercero un `button` con el texto `Remove` que al hacerle click hace un dispatch de la action `removeTodo`', () => {
      // El orden del boton aca es importante...
      expect(wrapper.find('button').at(2).text()).toEqual('Remove');
      wrapper.find('button').at(2).simulate('click');
      const expectedAction = [{
        payload: 1,
        type: 'RemoveTodo'
      }]
      expect(store.getActions()).toEqual(expectedAction);
    })
    
  });
})