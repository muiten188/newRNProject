import { Navigation } from 'react-native-navigation'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './home'
export function registerContainerWithRedux(
    containerName,
    requireComponentFunction,
    store,
    needPreloadComponent = false
) {

    const generatorWrapper = function () {
        const preloadComponent = needPreloadComponent ? requireComponentFunction().default : null
        return class Scene extends Component {
            static InternalComponent = null
            static initInternalComponent() {
                if (!Scene.InternalComponent) {
                    Scene.InternalComponent = preloadComponent || requireComponentFunction().default
                }
            }

            static get options() {
                Scene.initInternalComponent()
                return Scene.InternalComponent.options ? { ...Scene.InternalComponent.options } : {}
            }

            constructor(props) {
                super(props);
                Scene.initInternalComponent()
            }
            render() {
                return (
                    <Provider store={store}>
                        <Scene.InternalComponent
                            ref="child"
                            {...this.props}
                        />
                    </Provider>
                );
            }

            // componentDidAppear(id) {
            //     instance = this.refs.child.getWrappedInstance();
            //     if (instance && instance.componentDidAppear) {
            //         instance.componentDidAppear(id);
            //     }
            // }

            // componentDidDisappear(id) {
            //     instance = this.refs.child.getWrappedInstance();
            //     if (instance && instance.componentDidDisappear) {
            //         instance.componentDidDisappear(id);
            //     }
            // }

            // navigationButtonPressed(id) {
            //     instance = this.refs.child.getWrappedInstance();
            //     if (instance && instance.navigationButtonPressed) {
            //         instance.navigationButtonPressed(id);
            //     }
            // }
        };
    };

    registerContainer(containerName, generatorWrapper);
}

function registerContainer(containerName, generator) {
    Navigation.registerComponent(containerName, generator);
}

export default registerScreens = (store) => {
    registerContainerWithRedux(`newProject.Home`, () => require('./home'), store)
    registerContainerWithRedux(`newProject.Home2`, () => require('./home2'), store)
}