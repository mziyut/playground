class Animal
  attr_reader :name, :age, :breed

  def initialize(name, age, breed = nil)
    @name = name
    @age = age
    @breed = breed
  end

  def greet
    raise NotImplementedError.new("#{self.class}##{__method__} が実装されていません")
  end

  def walking?
    raise NotImplementedError.new("#{self.class}##{__method__} が実装されていません")
  end
end

class Dog < Animal
  def greet
    # Integer, Stringを返す場合の型を確認したい
    age > 3 ? 1 : "ワン!"
  end

  def walking?
    true
  end
end

class Fish < Animal
  def greet
    nil
  end

  def walking?
    false
  end
end

class Human < Animal
  ADULT_AGE = 18

  def greet
    "Hello, my name is #{name}!"
  end

  def walking?
    true
  end

  def adult?
    age >= ADULT_AGE
  end
end
