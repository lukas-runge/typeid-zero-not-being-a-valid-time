import { vi } from "vitest";

export class Clock {
	currentTime: number = 0;

	constructor() {
		vi.useFakeTimers();
		vi.setSystemTime(this.currentTime);
	}

	advanceTimeBy(ms: number) {
		vi.advanceTimersByTime(ms);
		this.currentTime += ms;
	}

	advanceTimeTo(ms: number) {
		vi.advanceTimersByTime(ms - this.currentTime);
		this.currentTime = ms;
	}
}
