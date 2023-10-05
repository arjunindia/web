import { renderHook } from '@testing-library/react-hooks/server';
import { useBattery } from '../..';

describe('useBattery', () => {
	it('should be defined', () => {
		expect(useBattery).toBeDefined();
	});

	it('should render', () => {
		const { result } = renderHook(() => useBattery());
		expect(result.error).toBeUndefined();
	});
});
