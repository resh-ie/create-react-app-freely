import { render, screen } from '@testing-library/react';

import Tag from '../../components/Tag/Tag';

describe('Tag component', () => {
  it('should render the component default status of NOT_STARTED', () => {
    render(<Tag label={'NOT_STARTED'} />);
    const tagLabel = screen.getByText('Not Started');
    expect(tagLabel).toHaveTextContent('Not Started');
  });

  it('should render the component default status of STARTED', () => {
    render(<Tag label={'STARTED'} />);
    const tagLabel = screen.getByText('Started');
    expect(tagLabel).toHaveTextContent('Started');
  });

  it('should render the component default status of FINISHED', () => {
    render(<Tag label={'FINISHED'} />);
    const tagLabel = screen.getByText('Finished');
    expect(tagLabel).toHaveTextContent('Finished');
  });
});
