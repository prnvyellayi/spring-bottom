import { render, screen } from '@testing-library/react'
import BottomSheet from '../components/bottomsheet'

test("Example 1 renders successfully", () => {
    render(<BottomSheet />);

    const element = screen.getByText(/content/i);

    expect(element).toBeInTheDocument();
})