class CharactersController < ApplicationController

  def index
    @characters = Character.all
    #@characters = [0x0111,0x0a222,0x0b0003]
  end

  def show
    @character = Character.find(params[:id])
  end

  def new
    @character = Character.new
  end

  def create
    @character = Character.new(character_params)
    @character.save
    redirect_to character_path(@character)
  end

  def edit
    @character = Character.find(params[:id])
  end

  def update
    @character = Character.find(params[:id])
    @character.update(character_params)
    redirect_to character_path(@character)
  end

  def destroy
    @character = Character.find(params[:id])
    @character.destroy
    redirect_to character_path, status: :see_other
  end

  def ruta1
  end

  def ruta2
  end

  def ruta3
  end

  private

  def character_params
    params.require(:character).permit(:name, :actor, :review, :image_url)
  end

end
