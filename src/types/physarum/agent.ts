import { Coords } from "@/types/abs/coords";

class Pheromone {
  private evaporation: number;

  constructor(evaporation: number) {
    this.evaporation = evaporation;
  }

  setEvaporation(evaporation: number) {
    this.evaporation = evaporation;
  }
}

class Sensors {
  private length: number;
  private angle: number;

  constructor(length: number, angle: number) {
    this.length = length;
    this.angle = angle;
  }

  setLength(length: number) {
    this.length = length;
  }

  setAngle(angle: number) {
    this.angle = angle;
  }

  check({ x, y }: { x: number; y: number }) {}
}

export class AgentConfig {}

export class Agent {
  private position: Coords;

  private pheromones: Pheromone[];
  private evaporation: number;
  private diffusion: number;

  private speed: number;
  private rotateAngle: number;
  private sensors: Sensors;

  private wobbling: number;
  private twisting: number;

  private insanityThreshold: number;
  private insanityTime: number;

  constructor(
    { x, y }: { x: number; y: number },
    evaporation: number,
    diffusion: number,
    speed: number,
    rotateAngle: number,
    { length, angle }: { length: number; angle: number },
    wobbling: number,
    twisting: number,
    threshold: number,
    time: number
  ) {
    this.position = new Coords(x, y);
    this.pheromones = [];
    this.evaporation = evaporation;
    this.diffusion = diffusion;
    this.speed = speed;
    this.rotateAngle = rotateAngle;

    this.sensors = new Sensors(length, angle);

    this.wobbling = wobbling;
    this.twisting = twisting;

    this.insanityThreshold = threshold;
    this.insanityTime = time;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  setRotateAngle(angle: number) {
    this.rotateAngle = angle;
  }

  setWobbling(wobbling: number) {
    this.wobbling = wobbling;
  }

  setTwisting(twisting: number) {
    this.twisting = twisting;
  }

  setInsanityThreshold(threshold: number) {
    this.insanityThreshold = threshold;
  }

  setInsanityTime(time: number) {
    this.insanityTime = time;
  }

  setSensors(length?: number, angle?: number) {
    if (length) this.sensors.setLength(length);
    if (angle) this.sensors.setAngle(angle);
  }

  update() {}
}
