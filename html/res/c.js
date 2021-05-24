var C = (function(){
	// ------Class Creation------
    var initializing = false,
	fnTest = /xyz/.test(function() {
	    xyz;
	}) ? /\b_super\b/: /.*/;
	
	// The base Class implementation (does nothing)
	this.Class = function() {};
	
	// Create a new Class that inherits from this class
	Class.extend = function(prop) {
	    var _super = this.prototype;
	
	    // Instantiate a base class (but only create the instance,
	    // don't run the init constructor)
	    initializing = true;
	    var prototype = new this();
	    initializing = false;
	
	    // Copy the properties over onto the new prototype
	    for (var name in prop) {
	        // Check if we're overwriting an existing function
	        prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn) {
	            return function() {
	                var tmp = this._super;
	
	                // Add a new ._super() method that is the same method
	                // but on the super-class
	                this._super = _super[name];
	
	                // The method only need to be bound temporarily, so we
	                // remove it when we're done executing
	                var ret = fn.apply(this, arguments);
	                this._super = tmp;
	
	                return ret;
	            };
	        })(name, prop[name]) : prop[name];
	    }
	
	    // The dummy class constructor
	    function Class() {
	        // All construction is actually done in the init method
	        if (!initializing && this.init) this.init.apply(this, arguments);
	    }
	
	    // Populate our constructed prototype object
	    Class.prototype = prototype;
	
	    // Enforce the constructor to be what we expect
	    Class.prototype.constructor = Class;
	
	    // And make this class extendable
	    Class.extend = arguments.callee;
	
		// ------自定义方法------
	    /* 接口检查,参数可以是一个或多个,使用方法:
		 * //声明接口
		 * var Interface1 = Class.createInterface(['getName']);
		 * // Person类实现接口
		 * var Person = Class.extend({...}).impl(Interface1);
		 */
	    Class.impl = function() {
	        if (arguments.length > 0) {
	            for (var i = 0,
	            len = arguments.length; i < len; i++) {
	                var interfac = arguments[i];
	                if (!interfac._isInterfaceType) {
	                    throw new Error("Class.impl()第" + (i + 1) + "个参数必须是接口类型");
	                }
	                for (var j = 0,
	                methodLen = interfac.methods.length; j < methodLen; j++) {
	                    var method = interfac.methods[j];
	                    if (!prototype[method] || typeof prototype[method] !== "function") {
	                        throw new Error("类没有实现接口中的[" + method + "]方法");
	                    }
	                }
	            }
	        }
	
	        return Class;
	    };// ------自定义方法 end------
	
	    return Class;
	};// ------Class Creation end------
	
	// 接口辅助类
	var Interface = function(_methods) {
		if(typeof _methods.join !== "function") {
			throw new Error("参数" + _methods + "错误.创建接口参数只能有一个,并且为数组类型");
		}
		
		this.methods = [];
		this._isInterfaceType = true;
 
		for (var i = 0, len = _methods.length; i < len; i++) {
			if (typeof _methods[i] !== "string") {
				throw new Error("定义接口中的方法必须为字符串类型");
			}
			this.methods.push(_methods[i]);
		}
	};
 
	
	return {
		/**
		 * 创建一个类
		 * @param option 类方法,json数据
		 * @param parentClass 父类
		 */
		createClass:function(option,parentClass) {
			if(!parentClass) {
				parentClass = Class;
			}
			return parentClass.extend(option);
		}
		/**
		 * 创建一个接口
		 * @param methods 接口中的方法
		 */
		,createInterface:function(methods) {
			return new Interface(methods);
		}
	};
	
})();
