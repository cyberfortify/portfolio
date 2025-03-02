import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          // Configure particle options here
        },
        interactivity: {
          // Configure interaction options
        }
      }}
    />
  );
};