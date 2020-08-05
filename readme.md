[Простое объяснение принципов SOLID](https://habr.com/ru/company/mailru/blog/412699/)

[Пример в GIT](https://github.com/avoropay/solid)

[SOLID](https://en.wikipedia.org/wiki/SOLID#:~:text=In%20object%2Doriented%20computer%20programming,the%20GRASP%20software%20design%20principles.)

## `Принцип единственной ответственности (Single Responsibility Principle)`

Существует лишь одна причина, приводящая к изменению класса.
Один класс должен решать только какую-то одну задачу. Он может иметь несколько методов, но они должны использоваться лишь для решения общей задачи. Все методы и свойства должны служить одной цели. Если класс имеет несколько назначений, его нужно разделить на отдельные классы.

**Любая сущность должна обладать только одной зоной ответственности.**

## `Принцип открытости/закрытости (Open-closed Principle)`

Программные сущности должны быть открыты для расширения, но закрыты для модификации.
Программные сущности (классы, модули, функции и прочее) должны быть расширяемыми без изменения своего содержимого. Если строго соблюдать этот принцип, то можно регулировать поведение кода без изменения самого исходника.

**Классы должны быть открыты для расширения, но закрыты для модификации**

## `Принцип подстановки Барбары Лисков (Liskov Substitution Principle)`

Этот принцип Барбара Лисков предложила в своём докладе “Data abstraction” в 1987-м. А в 1994-м идея была вкратце сформулирована Барбарой и Дженнет Уинг:
Пусть φ(x) — доказуемое свойство объекта x типа T. Тогда φ(y) должно быть верным для объектов y типа S, где S — подтип T.
В удобочитаемой версии повторяется практически всё, что говорил Бертранд Майер, но здесь в качестве базиса взята система типов:
Предварительные условия не могут быть усилены в подтипе.
Постусловия не могут быть ослаблены в подтипе.
Инварианты супертипа могут быть сохранены в подтипе.
Роберт Мартин в 1996-м дал другое определение, более понятное:
Функции, использующие указатели ссылок на базовые классы, должны уметь использовать объекты производных классов, даже не зная об этом.
Попросту говоря: подкласс/производный класс должен быть взаимозаменяем с базовым/родительским классом.

Значит, любая реализация абстракции (интерфейса) должна быть взаимозаменяемой в любом месте, в котором принимается эта абстракция. По сути, когда мы используем в коде интерфейсы, то используем контракт не только по входным данным, принимаемым интерфейсом, но и по выходным данным, возвращаемым разными классами, реализующими этот интерфейс. В обоих случаях данные должны быть одного типа.

**Функции которые используют базовый тип, должны уметь с ним взаимодействовать, при чем со всеми наследниками от базового типа (подтипами базового типа) тоже, при этом не зная ничего про их реализацию**

## `Принцип разделения интерфейса (Interface Segregation Principle)`

Нельзя заставлять клиента реализовать интерфейс, которым он не пользуется.
Это означает, что нужно разбивать интерфейсы на более мелкие, лучше удовлетворяющие конкретным потребностям клиентов.

Как и в случае с принципом единственной ответственности, цель принципа разделения интерфейса заключается в минимизации побочных эффектов и повторов за счёт разделения ПО на независимые части.

**Те классы которые наследуются от базового класса, если они не используют методы базового класса, они не должны от них зависеть.**

## `Принцип инверсии зависимостей (Dependency Inversion Principle)`

Высокоуровневые модули не должны зависеть от низкоуровневых. Оба вида модулей должны зависеть от абстракций.
Абстракции не должны зависеть от подробностей. Подробности должны зависеть от абстракций.
Проще говоря: зависьте от абстракций, а не от чего-то конкретного.

Применяя этот принцип, одни модули можно легко заменять другими, всего лишь меняя модуль зависимости, и тогда никакие перемены в низкоуровневом модуле не повлияют на высокоуровневый.

**Верхний уровень модулей не должен зависеть от нижнего уровня. Любые уровни должны зависеть от абстракций, а не от конкретики.**

[]: https://habr.com/ru/company/mailru/blog/412699/