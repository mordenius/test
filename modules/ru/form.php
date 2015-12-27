<div class="contact-form">
	<div class="container">
        <h4 class="title">Для Более детальной информации Вы можете связаться с нами</h4>
		<form id="contactForm"  action="" accept-charset="utf-8" method="post">
			<div id="callback"></div>
			<div class="holder">
				<input type="hidden" name="params_id" value="">
				<input type="hidden" name="XID" value="">
				<input type="hidden" name="csrf_token" value="">
				<ul class="fields">
					<li>
						<input id="name" type="text" class="field" placeholder="Имя" name="fname" data-required="true">
					</li>
					<li>
						<input type="text" class="field" placeholder="Фамилия" name="lname" data-required="true">
					</li>
				</ul>
				<ul class="fields">
					<li>
						<input type="email" class="field" placeholder="Email" name="email" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address" aria-required="true">
					</li>
					<li>
						<input type="tel" class="field" placeholder="Телефон" name="phone" data-required="phone">
					</li>
				</ul>
				<ul class="fields">
					<li>
						<input type="text" class="field" placeholder="Компания" name="company" data-required="true">
					</li>
					<li>
						<input type="text" class="field" placeholder="Должность" name="position" data-required="true">
					</li>
					<!--<li class="select-field">
						<span class="carot"></span>
						<input type="text" class="field" placeholder="Budget" readonly="" name="budget" data-required="true">
						<select name="budgetselect" class="select" data-required="">
							<option value="#">Please select</option>
							<option value="#" disabled="">----------</option>
							<option value="$500,000+">$500,000+</option>
							<option value="$250,000 - $500,000">$250,000 - $500,000</option>
							<option value="$100,000 - $250,000">$100,000 - $250,000</option>
							<option value="$50,000 - 100,000">$50,000 - 100,000</option>
							<option value="Under $50,000">Under $50,000</option>
						</select>
					</li>-->
				</ul>
				<ul class="fields">
					<li class="full-width">
						<textarea rows="4" class="field" placeholder="Как мы можем вам помочь?" name="message"></textarea>
					</li>
				</ul>
				<ul class="fields">
					<li class="full-width">
						<input class="btn orange fill large" type="submit" value="Отправить">
					</li>
				</ul>
				<input type="hidden" name="form_location" value="/contact/">
			</div>
		</form>
		<script type="text/javascript" src="js/jquery.validate.pack.js"></script>
		<script type="text/javascript" src="js/jquery.contactable.js"></script>
	</div>
	<div class="contact-manager-header">
		<div class="container">
			<h3>Получить быструю информацию</h3>
		</div>
	</div>
	<div class="contact-manager">
		<div class="container">
			<div>
				<p><b>Менеджер по продажам</b></p>
				<h2>Андрей Наздрин</h2>
				<p>nazdrin@kvinto.com.ua</p>
			</div>
			<div>
				<p><b>Маркетолог</b></p>
				<h2>Анна Горбуленко</h2>
				<p>a.gorbulenko@kvinto.com.ua</p>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
</div>