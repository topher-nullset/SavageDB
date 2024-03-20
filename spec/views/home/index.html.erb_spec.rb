require 'rails_helper'

RSpec.describe 'home/index.html.erb', type: :view do
  it 'displays the home page' do
    render
    expect(rendered).to include('Welcome to the Image Gallery')
  end
end
