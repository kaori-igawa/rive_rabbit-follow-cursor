// Rive
import {
  useRive,
  Layout,
  Fit,
} from '@rive-app/react-canvas';

import riveFile from '@data/riveFile.riv'

const AnimationView = () => {

  const riveParams = {
    src: riveFile,
    artboard: 'Artboard',
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
    }),
    autoplay: true,
  };

  const { rive, RiveComponent } = useRive(riveParams);

  return <RiveComponent />;
};

export default AnimationView;